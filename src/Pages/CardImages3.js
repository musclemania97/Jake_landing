import React from "react";
import styled from "styled-components";

import CardImage1 from "../Images/CardImage3page.svg";

export default () => {
  return (
    <Wrapper>
      <div style={{display: "flex", flexDirection: "row"}}>

        <LeftBox><strong>갖고싶은 신발<br/>시세까지 한번에</strong>
          <br/>
          <SecoundBox><strong>갖고 싶은 신발의 시세를 한 눈에 비교하고<br/>
          원하는 가격을 등록하세요. 거래가 성사되면<br/>
          전문검수팀의 완벽한 검수 후, 상품을 보내드립니다.</strong></SecoundBox>  
        
          
        
          <ButtonLayout>
            <SendButton type="submit" value="구매 요청하기" />
          </ButtonLayout>
       

          </LeftBox>

          <RightBox>        
          <LocalImage src={CardImage1} />
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


const LeftBox = styled.p`
  width: 100%;
  text-align: left;
  font-size:35px; 
  letter-spacing: 1px;
  opacity: 1;
  margin-top: 30%;
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



const RightBox = styled.div`
  margin-left: 10%;
  margin-top: 10%;
  margin-bottom: 8%;
  width: 100%;
`;
