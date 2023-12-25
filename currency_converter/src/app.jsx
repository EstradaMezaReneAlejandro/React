import { useState, useEffect } from 'react';

export default function App()
{

	const [amount, setAmaount] = useState(1);
	const [from, setFrom] = useState("USD");
	const [to, setTo] = useState("USD");
	const [result, setResult] = useState("");
	

	useEffect(function()
	{
		async function convertion()
		{
			const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
			const data = await res.json();
			setResult(data.rates[to]);
		}
		convertion();
	}, 
	[amount, from, to]);

	return (
		<div className='container'>
			<input type="text" value={amount} onChange={(e)=>setAmaount(Number(e.target.value))}/>
			<select value={from} onChange={(e) => setFrom(e.target.value)}>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="JPY">JPY</option>
			</select>
			<select value={to} onChange={(e) => setTo(e.target.value)}>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="JPY">JPY</option>
			</select>
			<p>{result} {to}</p>
		</div>
	);
}

