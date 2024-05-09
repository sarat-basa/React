import { useState } from "react";

function Counter(){
    let[counter,setCounter] = useState(20)

    const increasesCounter = () =>{
        setCounter(counter+1)
    }
    
    const decreesCounter = () =>{
        
        if(counter === 0){
            alert("Counter can't less then 0")
            return
        }
        setCounter(counter-1)
    }
    return(
        <>
            <h2>Counter : {counter}</h2>
            <button onClick={increasesCounter}> Increases Counter</button>
            <br/>
            <button onClick={decreesCounter}> Decrees Counter</button>
        </>
    )
}
export default Counter