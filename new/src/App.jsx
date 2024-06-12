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

  const firstName = "Devanshu Sir"

  return (
    <>
      {/* <BrowserRouter>
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
        </Routes>
      </BrowserRouter> */}

      {/* <Muitest/>
     <ButtonBaseDemo/> */}
      {/* 
     <Music/> */}

    <Child1 data={firstName}/>

    </>
  );
}

export default App;
