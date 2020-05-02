import React from "react";
import styled from "styled-components";

import CardImage5 from "../Images/CardImage5_ex.png";
import CardImage6 from "../Images/CardImage6_ex.png";
import CardImage7 from "../Images/CardImage7_ex.png";
import CardImage8 from "../Images/CardImage8_ex.png";
import LocalImageFile from "../Images/BrandImage3_rl.png";

export default () => {
  return (
    <Wrapper>
      <TopBox>
        <LocalImage src={LocalImageFile} />
      </TopBox>
      <MessageBox1>수학의 힘의 교육념과 철학에 대해서...</MessageBox1>
      <MessageBox2> 일률적인 주입식 교육에 의해 완성될 수 없는 <br />
      지식강국 한국이 요구하는 창의적이고 혁신적인 인재.</MessageBox2>
      <MessageBox2> 교육자와 학습자간의 더 많은 커뮤니케이션과 <br />
      궁금증을 자아내는 쌍방향적 수업방식이<br />
      학습자에게 학습의욕을 불러일으킬 수 있습니다.</MessageBox2>
      <MessageBox2> 스스로 배우고 싶어하고, 알고 싶어하며<br />
      나아가 창의적으로 사고하는 것은 엄청난 것들을 깨닫게 해줍니다.<br />
      이론상의 교욱과정 변화보다 중요한 학습현장의 변화.<br />
      학습에 대한 개념 또한 쉽고 재미있는 수업으로 변화해야합니다.</MessageBox2>
      <MessageBox2> 학생이 수동적 학습자가 아닌 <br />
      교실이나 강의실에서 능동적으로 수업 참여자로 거듭나는<br />
      수업모델과 교육 현장의 조성.</MessageBox2>
      <MessageBox3>바로 수학의 힘의 패러다임입니다.</MessageBox3>

      <MessageBox2>
          능동학습을 지향하는
          <br />
          새로운 수업의 패러다임
        </MessageBox2>


        <Layout>
      <Box>
        <LocalImage src={CardImage5} />
      </Box>
      <Box>
        <LocalImage src={CardImage6} />
      </Box>
      <Box>
        <LocalImage src={CardImage7} />
      </Box>
      <Box>
        <LocalImage src={CardImage8} />
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

const MessageBox2 = styled.p`
  text-align: left;
  font-size: 22px;
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


const MessageBox3 = styled.p`
  text-align: left;
  font-size: 22px;
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

const TopBox = styled.div`
  margin: 30px;
  width: 100%;
  max-width: 740px;
  background: #2c4f9f;
  @media only screen and (max-width: 720px) {
    width: 97%;
  }
`;
