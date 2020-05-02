import React from "react";
import styled from "styled-components";

import LocalImageFile from "../Images/BrandImage2_rl.png";

export default () => {
  return (
    <Wrapper>
      <Box>
        <LocalImage src={LocalImageFile} alt="Brand Image" />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  margin: 40px;
  width: 100%;
  max-width: 740px;
  @media only screen and (max-width: 720px) {
    width: 97%;
  }
`;

const LocalImage = styled.img`
  width: 100%;
  @media only screen and (max-width: 720px) {
    width: 100%;
    position: relative;
  }
`;
