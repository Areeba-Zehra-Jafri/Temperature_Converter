import './Converter.css'
import { useState } from "react";

function Converter() {
    const [temp, setTemp] = useState('');
    const [result, setResult] = useState('');

    const convertTemp = (mode) => {
        const value = parseFloat(temp);

        if (mode === 'Celsius') {
            setResult(((value - 32) * (5 / 9)));
        } else {
            setResult(((value * (9 / 5)) + 32));
        }
    }

    return (
        <div className='wrapper'>
            <h2>Temperature Converter</h2>

            <input
                type="number"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                placeholder="Enter temperature"
            />

            <div className='buttons'>
                <button onClick={() => convertTemp('Celsius')}>
                    Fahrenheit to Celsius
                </button>
                <button onClick={() => convertTemp('Fahrenheit')}>
                    Celsius to Fahrenheit
                </button>
            </div>

            {result !== '' && <p>Result: {result}</p>}
        </div>
    );
}

export default Converter;