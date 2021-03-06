import React from "react";
import styled from "styled-components";

import CardImage1 from "../Images/CardImage1_ex.svg";
import CardImage2 from "../Images/CardImage2_ex.svg";


export default () => {
  return (
    <Wrapper>
      <div style={{display: "flex", flexDirection: "row"}}>

        <LeftBox>
          <strong>한정판의 모든 것,<br/>플렉스에서 간편하게</strong><br/>
          <LocalImage1 src={CardImage2} />
           <ButtonLayout>
           <SendButton1 type="submit" value="Google Play" />
            <SendButton2 type="submit" value="App Store" />
          </ButtonLayout>
          </LeftBox>

          <RightBox>        
          <LocalImage2 src={CardImage1} />
          </RightBox>
        </div>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  width: 100%;
  height: 3%;
  background-color : #ffcb00; 
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
  letter-spacing: 2.5px;
  opacity: 1;
  margin-top: 150px;
  margin-bottom: 0px;
  }
`;


const LocalImage1 = styled.img`
  width: 80%;
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


const SendButton1 = styled.input`
  cursor: pointer;
  background: #ffcb00;
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

const SendButton2 = styled.input`
  cursor: pointer;
  background: #ffcb00;
  border: 3px solid #000000;
  border-radius: 20px;
  margin-left: 10%;
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



const RightBox = styled.div`
  margin-left: 10%;
  margin-top: 8%;
  width: 100%;
`;

const LocalImage2 = styled.img`
  width: 90%;
`;
