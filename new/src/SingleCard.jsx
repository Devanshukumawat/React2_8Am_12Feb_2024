import { useParams } from "react-router-dom";

function SingleCard() {
   const productId =  useParams()
   const {id} =productId
    return ( 
        <>
            <h1>Single Product</h1>
            <h2>Id :- {id} </h2>
        </>
     );
}

export default SingleCard;