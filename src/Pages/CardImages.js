import React from "react";
import styled from "styled-components";

import CardImage1 from "../Images/CardImage1_ex.png";
import CardImage2 from "../Images/CardImage2_ex.png";
import CardImage3 from "../Images/CardImage3_ex.png";
import CardImage4 from "../Images/CardImage4_ex.png";

export default () => {
  return (
    <Wrapper>
        <MessageBox>
          성과중심의
          <br />
          차별화된 교육 커리큘럼
        </MessageBox>
      <Layout>
        <Box>
          <LocalImage src={CardImage1} />
        </Box>
        <Box>
          <LocalImage src={CardImage2} />
        </Box>
        <Box>
          <LocalImage src={CardImage3} />
        </Box>
        <Box>
          <LocalImage src={CardImage4} />
        </Box>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 850px;
  margin-bottom: 100px;
  display: grid;
  grid-template-rows: repeat(2, 410px);
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  @media only screen and (max-width: 720px) {
    margin: 10px;
    width: 100%;
    display: block;
  }
`;

const Box = styled.div`
  ${"" /* padding: 10px; */}
  float: left;
  ${"" /* width: 540px; */}
  width: 100%;
`;

const LocalImage = styled.img`
  width: 100%;
`;


const MessageBox = styled.p`
  text-align: left;
  font-size: 35px;
  letter-spacing: 2.5px;
  color: #2c4f9f;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;
