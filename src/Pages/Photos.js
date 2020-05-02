import React from "react";
import styled from "styled-components";

import CardImage1 from "../Images/CardOffice1_ex.png";
import CardImage2 from "../Images/CardOffice2_ex.png";
import CardImage3 from "../Images/CardOffice3_ex.png";
import CardImage4 from "../Images/CardOffice4_ex.png";

export default () => {
  return (
    <Wrapper>
       <MessageBox1>아이플러스원 x 수학의힘</MessageBox1>

        <MessageBox2>
          내 아이를 위한 올바른 선택,
          <br />
          수학,영어의 맞춤형 수업을 한번에!
        </MessageBox2>
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


const MessageBox1 = styled.p`
  text-align: center;
  font-size: 55px;
  letter-spacing: 2.5px;
  color: #2c4f9f;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

const MessageBox2 = styled.p`
  text-align: center;
  font-size: 27px;
  letter-spacing: 2.5px;
  color: 000000;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;
