import { useMemo, useState } from "react";

function Memo() {

    

   
    const [value,setValue] = useState(0)
    const [name,setName] = useState("Manny")

    // function add(){
    //     console.log("Calculation Function")
    //     return value*3
    //  }

    let memoriezedvalue = useMemo(()=>{
        console.log("Memorized Function")
        return value*2
       
    },[value])


    function handleIncrement(){
        setValue(value+1)
    }

    function handleName(){
        setName("Devanshu")
    }

    return ( 
        <>
            <h1>UseMemo Hook</h1>
        {memoriezedvalue}
        {/* {add()} */}
            <h1>{value}</h1>
            <button onClick={handleIncrement}>Calculation</button>
            <h2>{name}</h2>
            <button onClick={handleName}>Update Name </button>


        </>
     );
}

export default Memo;