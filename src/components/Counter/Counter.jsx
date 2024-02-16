import React from "react";
import './counter.css';
import { useCount } from "../../hooks/useCount";

function Counter() {
    const {add, subtraction, valor} = useCount(0, 0, 3);
    return (
        <div className="counter">
            <p>{valor}</p>
            <button onClick={subtraction}>-</button>
            <button onClick={add}>+</button>
        </div>
    );
}

export default Counter;