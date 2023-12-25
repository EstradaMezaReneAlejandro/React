import { useReducer } from 'react';

const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
};

export default function App()
{

    function reducer(state, action)
    {
        switch (action.type)
        {
            case "openAccount":
                return {
                    ...state,
                    balance: 500,
                    isActive: true,
                };
            case "deposit":
                return {
                    ...state,
                    balance: state.balance + action.payload,
                };
            case "withdraw":
                return {
                    ...state,
                    balance: state.balance > 0 ? state.balance - action.payload : state.balance,
                };
            case "requestLoan":
                return {
                    ...state,
                    loan: state.loan !== 5000 ? state.loan + action.payload : state.loan,
                    balance: state.loan !== 5000 ? state.balance + action.payload : state.balance,
                };
            case "payLoan":
                return {
                    ...state,
                    loan: state.loan === 5000 ? state.loan - action.payload : state.loan,
                    balance: state.loan === 5000 ? state.balance - action.payload : state.balance,
                };
            case "closeAccount":
                return state.loan === 0 ? initialState : state;
            default:
                console.log("case not found");
        }
    }

    const [{balance, loan, isActive}, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="app">
            <h1>UseReducer Bank Account</h1>
            <h3>Balance: {balance}</h3>
            <h3>Loan: {loan}</h3>
            <button disabled={isActive} onClick={() => dispatch({  type: "openAccount" })}>Open account</button>
            <button disabled={!isActive} onClick={() => dispatch({  type: "deposit", payload: 150 })}>Deposit 150</button>
            <button disabled={!isActive} onClick={() => dispatch({  type: "withdraw", payload: 50 })}>Withdraw 50</button>
            <button disabled={!isActive} onClick={() => dispatch({  type: "requestLoan", payload: 5000 })}>Request a loan of 5000</button>
            <button disabled={!isActive} onClick={() => dispatch({  type: "payLoan", payload: 5000 })}>Pay loan</button>
            <button disabled={!isActive} onClick={() => dispatch({  type: "closeAccount" })}>Close account</button>
        </div>
    );
}