import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import "./App.css";

import Header from "./Pages/Header";
import BrandImage from "./Pages/BrandImage";
import BrandImage2 from "./Pages/BrandImage2";
import CardImages from "./Pages/CardImages";
import CardImages2 from "./Pages/CardImages2";
import Photos from "./Pages/Photos";
import Contact from "./Pages/Contact";


const Box = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

function App() {
  return (
    <div>
      <Header />
      <BrandImage />
      <BrandImage2 />
      <CardImages />
      <CardImages2 />     
      <Photos />
      <Contact />
    </div>
  );
}

export default App;
