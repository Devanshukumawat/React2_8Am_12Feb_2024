import { useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Test() {
    const [value,setValue] = useState("dev")
    const colorRef = useRef()
    console.log(colorRef)
    function colorChange(){
        colorRef.current.style.backgroundColor = "red"
    }

    let initialState = 7876

    function reducer(currentState,action){

    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const navigation =   useNavigate()

    function handleNavigate(){
        navigation("/")
    }

    return ( 
        <>
            {/* useState() */}
            {/* useEffect(()=>{},[value]) */}
            {/* useRef() */}
            {/* useReducer */}
            {/* useNavigate() */}
            <h1>{value}</h1>
            <button onClick={()=>{setValue("manny")}}>Update</button>
            <button ref={colorRef} onClick={colorChange} style={{backgroundColor:"green"}}>Color</button>

            <h1>State :- {state}</h1>
            <h2 onClick={handleNavigate}>Navigate</h2>
        </>
     );
}

export default Test;