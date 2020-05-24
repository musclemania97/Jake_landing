import React from "react";
import styled from "styled-components";

import Logo from "../Images/logo.svg";


export default () => {
  return (
    <Wrapper>
      <div style={{display: "flex"}}>
      <LocalImage src={Logo} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 2%;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const LocalImage = styled.img`
  margin-left: 100px;
  width: 50%;
  @media only screen and (max-width: 720px) {
    margin-left: 0px;
    width: 60px;
  }
`;


