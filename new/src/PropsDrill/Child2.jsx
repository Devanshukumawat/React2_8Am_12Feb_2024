import Child3 from "./Child3";

function Child2({c2data}) {
    return ( 
        <>
            <h1>Child2 Comp</h1>
            <Child3 c3data= {c2data}/>
        </>
     );
}

export default Child2;