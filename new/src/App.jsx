import { useEffect, useState } from "react";
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


let myData = createContext()
let myData1 = createContext()

function App() {
  const [product, setProduct] = useState([]);

  const data = [
    {name:"Iphone",}
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
          <Route path="/test" element={<Muitest />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ref" element={<RefHook/>} />
          <Route path="/reducer" element={<Reducer/>} />
          <Route path="/tailwind" element={<Tailwind/>} />
          <Route path="/weather" element={<Weather/>} />
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

    </>
  );
}

export default App;
export {myData,myData1}

