import { useState } from "react";
function Counter(){
//....valor...funcion de..........
//....inicio...cambio..............
const [count, setCount] = useState(0)

function sumar(){
    setCount(count + 1);
}
function restar(){
    setCount(count - 1);
}
function reset(){
    setCount(0);
}

    return(
        <div>
            <h1>Contador: {(count)}</h1>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export {Counter};