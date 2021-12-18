import React, { useState } from "react";
import "../css/itemCount.css";


const Contador = ( { stock, initial, onAdd} ) => {

    const [ count, setCount] = useState(initial);

    const add = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }
    
    const decrease = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(1)
    }

    return (
        <div className="countContainer"> 
            <div className="count">
            <button onClick={decrease} className="btn">-</button>
            <p>{count}</p>
            <button onClick={add} className="btn">+</button>
            </div>
            <button onClick={reset} className="btnReset">Reset</button>
        </div>
    )
}

export default Contador
