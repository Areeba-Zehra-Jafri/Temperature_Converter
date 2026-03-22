import './Converter.css'
import { useState } from "react";

function Converter() {
    const [temp, setTemp] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);  

    const convertTemp = (mode) => {
        const value = parseFloat(temp);
        let converted;

        if (mode === 'Celsius') {
            converted = ((value - 32) * (5 / 9));
            setResult(converted);
        } else {
            converted = ((value * (9 / 5)) + 32);
            setResult(converted);
        }

        setHistory(prev => [
            { from: value, to: converted, mode },
            ...prev
        ]);
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

            {result !== '' && <p>Result: {result.toFixed(2)}</p>}

            {history.length > 0 && (
                <div className='history'>
                    <h3>History</h3>
                    <ul>
                        {history.map((entry, index) => (
                            <li key={index}>
                                {entry.mode === 'Celsius'
                                    ? `${entry.from}°F → ${entry.to.toFixed(2)}°C`
                                    : `${entry.from}°C → ${entry.to.toFixed(2)}°F`
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Converter;