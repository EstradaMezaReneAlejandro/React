import { useReducer } from "react";

function reducer(state, action)
{
    if(action.type === "increase") return state + 1;
    if(action.type === "decrease") return state - 1;
    if(action.type === "reset") return action.payload;
}

function App() 
{
    const [count, dispatch] = useReducer(reducer, 0);

    function increase()
    {
        dispatch({type: "increase"});
    }
    function decrease()
    {
        dispatch({type: "decrease"});
    }
    function reset()
    {
        dispatch({type: "reset", payload: 0});
    }

    return (
        <>
            <button onClick={decrease}>decrease</button>
            <h1>{count}</h1>
            <button onClick={increase}>increase</button>
            <button onClick={reset}>reset</button>
        </>
    );
}

export default App
