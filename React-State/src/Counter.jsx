import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incCount = () => setCount((c) => c + 1);
    const decCount = () => setCount((c) => c - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter">
            <h3>Count: {count}</h3>
            <div className="counter-controls">
                <button className="btn" onClick={decCount} aria-label="Decrease">-</button>
                <button className="btn" onClick={incCount} aria-label="Increase">+</button>
                <button className="btn secondary" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}