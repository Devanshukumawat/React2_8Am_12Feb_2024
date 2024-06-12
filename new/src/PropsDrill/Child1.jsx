import Child2 from "./Child2";

function Child1(props) {
    const {data} = props
    return ( 
        <>
            <h1>Child1 Comp</h1>
            <Child2 c2data = {data}/>
        </>
     );
}

export default Child1;