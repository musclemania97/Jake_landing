import React from "react";
import styled from "styled-components";

import LocalImageFile from "../Images/BrandImage_rl.jpeg";

export default () => {
  return (
    <Wrapper>
      <LocalImage src={LocalImageFile} alt="Brand Image" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocalImage = styled.img`
  width: 100%;
  @media only screen and (max-width: 720px) {
    width: 200%;
    position: relative;
  }
`;
