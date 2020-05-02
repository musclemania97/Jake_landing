import React from "react";
import styled from "styled-components";

import Logo from "../Images/Logo.png";
import Blog from "../Images/Blog_Icon.png";
import Kakao from "../Images/Kakao_Icon.png";
import Tel from "../Images/Tel_Icon.png";

export default () => {
  return (
    <Wrapper>
      <LocalImage src={Logo} />
      <FloatBox>
        <a href="http://pf.kakao.com/_PVPUj">
          <SmallLocalImage src={Kakao} />
        </a>
        <a href="https://blog.naver.com/youngmiparis">
          <SmallLocalImage src={Blog} />
        </a>
        <a href="tel:031-424-4226">
          <SmallLocalImage src={Tel} />
        </a>
      </FloatBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
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
  margin-left: 20px;
  width: 100px;
  @media only screen and (max-width: 720px) {
    margin-left: 0px;
    width: 60px;
  }
`;

const SmallLocalImage = styled.img`
  margin-left: 20px;
  width: 30px;
  @media only screen and (max-width: 720px) {
    margin-left: 10px;
    width: 20px;
  }
`;

const FloatBox = styled.div`
  margin-right: 40px;
  float: right;
  @media only screen and (max-width: 720px) {
    margin-right: 20px;
  }
`;
