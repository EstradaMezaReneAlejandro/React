import { useState } from 'react';

const data = [
    {
        id: 1,
      title: "Where are these chairs assembled?",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
        show: false,
    },
    {
        id: 2,
      title: "How long do I have to return my chair?",
      text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
        show: false,
    },
    {
        id: 3,
      title: "Do you ship to countries outside the EU?",
      text:
        "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
        show: false,
    }
];

export default function App()
{
    const [facts, setFacts] = useState(data);

    function hangleToggle(id)
    {
        setFacts(facts => facts.map((fact) => fact.id === id ? {...fact, show: !fact.show} : fact));
    }

    const acor = facts.map((fact) => (<Acordion ket={fact.id} id={fact.id} item={fact} toggle={hangleToggle}/>));

    return (
        <div className="App">
            {acor}
        </div>
    );
}

function Acordion({ id, item, toggle })
{
    return (
        <div onClick={() => toggle(id)} className='acordion'>
            <div className='acordion-header'>
                <h1>{item.title}</h1><button >{!item.show ? "+" : "-"}</button>
            </div>
            <p>{item.show ? item.text : ""}</p>
        </div>
    );
}