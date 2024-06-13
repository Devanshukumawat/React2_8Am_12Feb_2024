// import { act, useReducer } from "react";

import { act, useReducer, useRef } from "react";

// function Reducer() {

//     let initialState = 10

//     function reducer(currentState,action){
//         console.log(action)

//         switch(action){
//             case "Increment":
//                return  currentState += 1
                    
//             case "Decrement":
//                 return currentState-=1
           
//             default:
//                return currentState
//         }
//     }

//     const [state,disPatch] = useReducer(reducer,initialState)

//     return ( 
//         <>
//             <h1>Reducer Hook In react</h1>
//             <button onClick={()=>{disPatch("Increment")}}>Increment</button>
//             <h1>{state}</h1>
//             <button onClick={()=>{disPatch("Decrement")}}>Decrement</button>
//         </>
//      );
// }

// export default Reducer;



function Reducer() {

    const colorBtn = useRef("")
    console.log(colorBtn)


    function handleColor(){
        colorBtn.current.style.backgroundColor = "green"
        colorBtn.current.style.color = "white"
    }
   

    let initialState = {
        age:34
    }

    function reducer(currentState,action){

        console.log(action)
        if(action.type === "Inc Age"){
            return {
                age:currentState.age+1
            }
        }

    }

   const [state,disPatch] = useReducer(reducer,initialState)
    return ( 
        <>
            <h1>Age :- {state.age} </h1>
            <button onClick={()=>{disPatch({type:"Inc Age"})}} >Inc Age</button>

            <button onClick={handleColor} ref={colorBtn}>Color</button>
        </>
     );
}

export default Reducer;