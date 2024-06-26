import { useParams } from "react-router-dom";

function Singleproduct(props) {
    const {id} =   useParams()
    const {productData} = props

    function findData(){
        return productData[id]
    }

    return ( 
        <>
            <h1>Single Product</h1>
          

            {
                <>
                <h1>Product Name :- {findData().ProductName}</h1>
                <h2>Product Price :- {findData().ProductPrice}</h2>
                </>
            }

        </>
     );
}

export default Singleproduct;