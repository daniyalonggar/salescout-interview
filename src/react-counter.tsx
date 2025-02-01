// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
<<<<<<< HEAD
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default Counter;
=======
import React from 'react'

function Counter() {
    // Your code goes here
    return (<></>)
}

export default Counter
>>>>>>> fdcfbc733ec7b4e1fed69f6da05dfa4761905999
