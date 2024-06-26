import { Link } from "react-router-dom";

function Product(props) {
    const {productData} = props
    return ( 
        <>
            <h1>Products</h1>
            {
                productData.map((value,index)=>(
                    <>

                        <Link to={`/singleproduct/${index}`}>
                        <div style={{
                            border:"2px solid red",
                            margin:"10px"
                        }}>
                        <h1>Product Name :- {value.ProductName}</h1>
                        <h2>Product Price :- {value.ProductPrice}</h2>
                        </div>
                        </Link>
                        
                        
                    </> 
                ))
            }
        </>
     );
}

export default Product;