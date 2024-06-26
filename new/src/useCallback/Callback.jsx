import { useState } from "react";

function Callback(props) {

    const [state,setState] = useState(0)


    function handleUpdate(){
        setState(state+1)
    }
    
    return ( 
        <h1>
        {props.myFun()}
            UseCallback Hook
            <h1>{state}</h1>
            <button onClick={handleUpdate}>Update</button>
        </h1>
     );
}

export default Callback;