import { useState } from "react";

export default function App()
{
    return (
        <div className="App">
            <TipCalculator />
        </div>
    );
}

function TipCalculator()
{
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    
    const total = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset()
    {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
    }

    return (
        <div className="App">
            <Bill bill={bill} onSetBill={setBill} />
            <Select percentage={percentage1} onSetPercentage={setPercentage1}>Tip from you: </Select>
            <Select percentage={percentage2} onSetPercentage={setPercentage2}>Tip from your friend: </Select>
            <TotalPayment bill={bill} total={total}/>
            <Reset onReset={handleReset}/>
        </div>
    );
}

function Bill({ bill, onSetBill })
{
    return (
        <div>
            <label>Enter the bill you are going to pay: </label>
            <input 
                type="text" 
                value={bill} 
                onChange={(e) => onSetBill(Number(e.target.value))}/>
        </div>
    );
}

function Select({ percentage, onSetPercentage, children })
{
    return (
        <div>
            <label>{children}</label>
            <select 
                value={percentage} 
                onChange={(e) => onSetPercentage(Number(e.target.value))}
            >
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
    );
}

function TotalPayment({ bill, total })
{
    return (
        <div>
            <h2>{`Total: ${bill + total} (${bill} + ${total})`}</h2>
        </div>
    );
}

function Reset({ onReset })
{
    return <button onClick={onReset}>Reset</button>
}
