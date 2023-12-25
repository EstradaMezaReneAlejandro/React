import { useState } from 'react';

export default function App()
{   
    
    const [weight, setWeight] = useState(80);
    const [height, setHeight] = useState(170);

    const IMC = (weight / Math.pow(height, 2)).toFixed(2);

    return (
        <div className="App">
            <div className="header">
                <h1>Calculadora de IMC</h1>
            </div>
            <div className="inputs">
                <label htmlFor="weight">{weight} kg</label>
                <input name="weight" onChange={e => setWeight(Number(e.target.value))} value={weight} type="range" min="0" max="150" step="1"/>
                <label htmlFor="height">{height} cm</label>
                <input name="height" onChange={e => setHeight(Number(e.target.value))} value={height} type="range" min="0" max="2.5" step="0.01"/>
            </div>
            <div className="results">
                <p>Tu IMC es: </p>
                <span>{IMC}</span>
            </div>
        </div>
    );
}