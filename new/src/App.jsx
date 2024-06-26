import { useCallback, useEffect, useState } from "react";
import ButtonBaseDemo from "./comp/Image";
import Muitest from "./comp/Muitest";
import Music from "./comp/Music";
import Card from "./Card";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleCard from "./SingleCard";
import Navbar from "./comp/Navbar";
import SignIn from "./comp/SignIn";
import Child1 from "./PropsDrill/Child1";
import RefHook from "./comp/RefHook";
import Reducer from "./comp/Reducer";
import ChildA from "./Context/ChildA";
import { createContext } from "react";
import Tailwind from "./Tailwind/Tailwind";
import Weather from "./Weather/Weather";
import Test from "./Test";
import Memo from "./usememo/Memo";
import Callback from "./useCallback/Callback";


let myData = createContext()
let myData1 = createContext()

function App() {
  const [product, setProduct] = useState([]);

  const data = [
    {ProductName:"Iphone",ProductPrice:"$678"},
    {ProductName:"Samsung",ProductPrice:"$099"},
    {ProductName:"MI",ProductPrice:"$67"},
    {ProductName:"Jio",ProductPrice:"$456"},
    {ProductName:"One_plus",ProductPrice:"$456"}

  ]

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      }).catch((error)=>{
        console.log(error)
      })
  }, []);

  
  // context = create,provide,consumer
  // create , provide , usecontext
  

  const firstName = "Devanshu Sir"
  const lastName = "Text"
 
  
  const [inc,setInc] = useState(0)
  const [name,setName] = useState("Manny")

  function updateName(){
    setName("Kizie")
  }

  function Increment(){
    setInc(inc+1)
  }

  const memoFun = useCallback(()=>{
    console.log("Memorized Fun")
  },[name])

//  function memoFun(){
//   console.log("Hello Function")
//  }


  return (
    <>
    
    <myData.Provider value={firstName}>
    <myData1.Provider value={lastName}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={product.map((value) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card productData={value} />
              </Box>
            ))}
          />
          <Route path="/single/:id" element={<SingleCard />} />
          <Route path="/music" element={<Music />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ref" element={<RefHook/>} />
          <Route path="/reducer" element={<Reducer/>} />
          <Route path="/tailwind" element={<Tailwind/>} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/memo" element={<Memo/>} />
          <Route path="/callback" element={<Callback myFun={memoFun}/>} />
        </Routes>
      </BrowserRouter>




      {/* <ChildA /> */}

      {/* <Muitest/>
     <ButtonBaseDemo/> */}
      {/* 
     <Music/> */}

    {/* <Child1 data={firstName}/> */}
    </myData1.Provider>
    </myData.Provider>

    <h1>{inc}</h1>
    <button onClick={Increment}>Increment</button>
    <h2>{name}</h2>
    <button onClick={updateName}>name</button>


    </>
  );
}

export default App;
export {myData,myData1}

