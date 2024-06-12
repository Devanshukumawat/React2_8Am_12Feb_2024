import Child4 from "./Child4";

function Child3({c3data}) {
    return ( 
        <>
            <h1>Child3 Comp</h1>
            <Child4 c4data= {c3data} />
        </>
     );
}

export default Child3;