import React from "react";
import styled from "styled-components";

import CardImage1 from "../Images/CardImage2page.svg";

export default () => {
  return (
    <Wrapper>
      <div style={{display: "flex", flexDirection: "row"}}>

      <LeftBox><LocalImage src={CardImage1} /></LeftBox>

        <RightBox><strong>원클릭으로<br/>원하는 가격에 판매하기</strong>
          <br/>
          <SecoundBox><strong>보유 신발을 간편하고 신속하게 판매할 수 있습니다.<br/>
          거래가 성사되면 상품만 안전하게 보내주세요.<br/>
          검수 후 정산됩니다.</strong></SecoundBox>  

          <ButtonLayout><SendButton type="submit" value="판매 요청하기" /></ButtonLayout>

          </RightBox>

        </div>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  width: 100%;
  height: 3%;
  background-color : #ffffff; 
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const RightBox = styled.p`
  width: 100%;
  text-align: left;
  font-size:35px; 
  letter-spacing: 1px;
  opacity: 1;
  margin-top: 30%;
  margin-left: 7%;
  margin-bottom: 0px;
  }
`;


const LocalImage = styled.img`
  width: 90%;
  margin-top: 10%;
`;


const ButtonLayout = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  margin: 50px auto;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;


const SendButton = styled.input`
  cursor: pointer;
  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 15px;
  opacity: 1;
  font-size: 20px;
  letter-spacing: -0.26px;
  color: #000000;
  width: 50%;
  height: 10%;
  padding: 5%;

  @media only screen and (max-width: 720px) {
    font-size: 20px;
    width: 200px;
    padding: 5%;
  }
`;


const SecoundBox = styled.div`
  width: 100%;
  font-size: 15px;
  color: #747474;
  margin-top: 50px;
  }
`;



const LeftBox = styled.div`
  margin-top: 8%;
  width: 100%;
`;


