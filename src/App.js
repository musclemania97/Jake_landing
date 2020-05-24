import React from "react";
import styled from "styled-components";

import "./App.css";

import Header from "./Pages/Header";
import CardImages from "./Pages/CardImages";
import CardImages2 from "./Pages/CardImages2";
import CardImages3 from "./Pages/CardImages3";

function App() {
  return (
    <div>
      <Header />
      <CardImages />
      <CardImages2 />
      <CardImages3 />
    </div>
  );
}

export default App;
