import {myData } from "../App"

function ChildD() {
    return ( 
        <>
            <myData.Consumer>
           

              
                {
                    (firstName)=>{
                       
                        return(
                            <>
                               {firstName}
                            </>
                        )
                    }
                }
             
            
            </myData.Consumer>
            
        </>
     );
}

export default ChildD;