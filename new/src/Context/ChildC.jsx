import {  useContext } from "react";
import ChildD from "./ChildD";
import { myData, myData1 } from "../App";

function ChildC() {
    const firstName = useContext(myData)
    const lastName = useContext(myData1)
    console.log(firstName)
    return ( 
        <>
            <h1>Child-C Comp....  {firstName}{lastName}
</h1>
           
            <ChildD/>
        </>
     );
}

export default ChildC;