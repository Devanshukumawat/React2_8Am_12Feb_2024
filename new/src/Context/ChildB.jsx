import { useContext } from "react";
import ChildC from "./ChildC";
import { myData1 } from "../App";

function ChildB() {
    const lastName = useContext(myData1)
    return ( 
        <>
            <h1>Child-B Comp.... {lastName}</h1>

            <ChildC/>
        </>
     );
}

export default ChildB;