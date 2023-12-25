import React, { useState } from 'react';
import './App.css';

const messages = [
  'learn react ❄️',
  'Apply for jobs 💼',
  'Invest your new incomes 💰',
];

function App() 
{
  const [isOpen, setOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handlePrevious()
  {
    setStep(s => s - 1);
  }

  function handleNext()
  {
    setStep(s => s + 1)
  }

  function handleOpen()
  {
    setOpen(open => !open);
  }

  return (
    <>
      <button className="close" onClick={handleOpen}>&times;</button>
    {isOpen &&
      <div className='steps'>
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">Step {step}: {messages[step - 1]}</p>

      <div className="buttons">
        <button disabled={step === 1 ? true : false} onClick={handlePrevious} style={{backgroundColor: '#7950f2', color: "#fff"}}>Previous</button>
        <button disabled={step === 3 ? true: false} onClick={handleNext} style={{backgroundColor: "#7950f2", color: "#fff"}}>Next</button>
      </div>
    </div>}
    </>
  );
}

export default App
