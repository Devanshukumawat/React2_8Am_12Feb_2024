import { useRef, useState } from "react";

function RefHook() {

    const [name,setName] = useState("")

    const refHook = useRef("")
    const error = useRef("")
    console.log(error)

    function handleFocus(){
        refHook.current.focus()
    }

    function handleColor(){
        refHook.current.style.color = "red"
        refHook.current.style.outlineColor = "green"
        if(name===""){
                refHook.current.style.borderColor = "red"
                error.current.innerText = "Please fill this field"

        }
        
    }

    return ( 
        <>
            <h1>Ref Hook</h1>
           
                <span ref={error} ></span>
                <input type="text" ref={refHook} value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <button onClick={handleFocus}>Add</button>
                <button onClick={handleColor}>Color</button>
           
        </>
     );
}

export default RefHook;