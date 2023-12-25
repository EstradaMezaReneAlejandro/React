import { useState } from 'react';

const questions = [
    {
        id: 1,
        question: "What's your name?",
        response: "Rene",
        show: false
    },
    {
        id: 2,
        question: "How old are you?",
        response: "24 years old",
        show: false
    },
    {
        id: 3,
        question: "What's your favorite color?",
        response: "Red",
        show: false
    },
];

export default function App()
{
    const [data, setData] = useState(questions);

    function toggle(id)
    {
        setData(prevData => {
            return prevData.map(d => {
                return d.id === id ? {...d, show: !d.show} : d;
            });
        });
    }

    const FlashCards = data.map(d => (<Card key={d.id} item={d} handleClick={() => {toggle(d.id)}} />));

    return (
        <div className='App'>
            {FlashCards}
        </div>
    );
}

function Card({ id, item, handleClick})
{
    return (
        <div onClick={handleClick} className={`card ${!item.show ? "question" : "response"}`}>
            <p>{ !item.show ? item.question : item.response}</p>
        </div>
    );
}

