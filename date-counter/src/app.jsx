import { useState } from 'react';

export default function App()
{
    // const fecha = new Date();
    const formato = {year:"numeric", month:"long", day:"numeric"};
    const [steps, setSteps] = useState(1);
    const [date, setDate] = useState(new Date());

    function handleNextStep()
    {
        setSteps(s => s + 1);
    }

    function handlePreviousStep()
    {
        if(steps > 1)
        {
            setSteps(s => s - 1);
        }
    }

    function sumarDias() 
    {
        const fechaActualizada = new Date(date.getTime());
        fechaActualizada.setDate(fechaActualizada.getDate() + steps);
        setDate(fechaActualizada);
    };
    
    function restarDias() 
    {
        const fechaActualizada = new Date(date.getTime());
        fechaActualizada.setDate(fechaActualizada.getDate() - steps);
        setDate(fechaActualizada);
    };
    // function addDay()
    // {
    //     setDate(date => date.setDate(getDate() + steps).toLocaleDateString('ex-MX', formato));
    // }

    return (
        <div className="App">
            <div>
                <h2>Pasos</h2>
                <button onClick={handlePreviousStep}>-</button>
                <p>{steps}</p>
                <button onClick={handleNextStep}>+</button>
            </div>
            <div>
                <h2>Fecha</h2>
                <button onClick={restarDias}>-</button>
                <p>{date.toLocaleDateString('es-MX', formato)}</p>
                <button onClick={sumarDias}>+</button>
            </div>
        </div>
    );
}