import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from './Footer';
import Timer from "./Timer";

const SECS_PER_QUESTIONS = 30;

const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    seconds: null,
};

function reducer(state, action)
{
    switch(action.type)
    {
        case 'dataReceived':
            return { 
                ...state, 
                questions: action.payload, 
                status: "ready",
            };
        case "dataFailed":
            return {
                ...state,
                status: "error",
            }
        case "start":
            return {
                ...state,
                status: "active",
                seconds: state.questions.length * SECS_PER_QUESTIONS,
            }
        case "newAnswer":
            const question = state.questions.at(state.index);
            return {
                ...state, 
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points + question.points : state.points,
            }
        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null,
            }
        case "finished":
            return {
                ...state,
                status: "finished",
                highscore: state.points > state.highscore ? state.points : state.highscore,
            }
        case "restart":
            return {
                ...state,
                status: "ready",
                answer: null,
                index: 0,
                points: 0,
            }
        case "tick":
            return {
                ...state,
                seconds: state.seconds - 1,
                status: state.seconds === 0 ? "finished" : state.status,
            }
        default:
            throw new Error("Action unknown");
    }
}


export default function App()
{

    const [{questions, status, index, answer, points, highscore, seconds}, dispatch] = useReducer(reducer, initialState);

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

    useEffect(
        function()
        {
            fetch("http://localhost:8000/questions")
            .then(res => res.json())
            .then(data => dispatch({type: 'dataReceived', payload: data}))
            .catch(err => dispatch({type: 'dataFailed'}));
        }, 
        []
    );

    return (
        <div className="app">
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen 
                    numQuestions={numQuestions}
                    
                    dispatch={dispatch}
                />}
                {status === "active" && (
                    <>
                        <Progress 
                            index={index} 
                            numQuestion={numQuestions} 
                            points={points}
                            maxPoints={maxPossiblePoints}
                            answer={answer}
                        />
                        <Question 
                            question={questions[index]}
                            dispatch={dispatch}
                            answer={answer}
                        />
                        <Footer>
                            <Timer seconds={seconds} dispatch={dispatch}/>
                            <NextButton 
                                dispatch={dispatch} 
                                answer={answer}
                                index={index}    
                                numQuestion={numQuestions}
                            />
                        </Footer>
                    </>
                )}
                {status === "finished" && (
                        <FinishScreen 
                            points={points} 
                            maxPossiblePoints={maxPossiblePoints} 
                            highscore={highscore} 
                            dispatch={dispatch}
                        />
                    )}
            </Main>
        </div>
    );
}