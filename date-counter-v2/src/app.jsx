import { useState } from 'react';

export default function App()
{
    const formato = {year:"numeric", month:"long", day:"numeric"};
    const [date, setDate] = useState(new Date());
    const [range, setRange] = useState(0);
    const [quantity, setQuantity] = useState(0);

    function add()
    {
        const fechaActualizada = new Date(date.getTime());
        fechaActualizada.setDate(fechaActualizada.getDate() + range);
        setDate(fechaActualizada);
        setQuantity(q => q + range);
    }
    
    function substract()
    {
        const fechaActualizada = new Date(date.getTime());
        fechaActualizada.setDate(fechaActualizada.getDate() + range);
        setDate(fechaActualizada);
        setQuantity(q => q - range);
    }

    function reset()
    {
        setDate(new Date());
        setQuantity(0);
        setRange(0);
    }

    return (
        <div className="App">
            <label htmlFor="input1">
                <input onChange={e => setRange(Number(e.target.value))} name="input1" type="range" min="0" max="10" step="1" value={range}/> {range}
            </label>
            <div>
                <button onClick={substract}>-</button>
                <input onChange={e => {setQuantity(Number(e.target.value))}} type="text" value={quantity}/>
                <button onClick={add}>+</button>
            </div>
            <p>{date.toLocaleDateString('es-MX', formato)}</p>
            <button onClick={reset}>
                reset
            </button>
        </div>
    );
}