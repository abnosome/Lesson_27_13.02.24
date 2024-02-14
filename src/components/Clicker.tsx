import React, { useState } from 'react';


export default function Clicker() {
    const [state, setCount] = useState(0);

    const increment = () => {
        setCount(state + 1);
    };

    const decrement = () => {
        if (state !== 0) {
            setCount(state - 1);
        }
    };

    const handlerR =(event:React.MouseEvent):void=>{
        event.preventDefault();
        console.log("+");
    }
    const handlerL =(event:React.MouseEvent):void=>{
        event.preventDefault();
        console.log("-");
    }
    return (
        <div>
            <p>Current count: {state}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={handlerL}onContextMenu={handlerR}>+/-</button>
        </div>
    );
}
