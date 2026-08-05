import { useState } from 'react';

export default function Counter() {

    let [stateVariable, setStateVariable] = useState(0);

    let incCount = () => {
        setCount(count + 1);
        console.log(count);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increment</button>
        </div>
    );
}