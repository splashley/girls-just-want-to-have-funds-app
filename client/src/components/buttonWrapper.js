import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import { useHistory } from "react-router-dom";

const ButtonWrapper = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <MainButton
        onClick={() => {
          history.push("/??");
        }}
      >
        BACK
      </MainButton>
      <MainButton
        onClick={() => {
          history.push("/??");
        }}
      >
        NEXT
      </MainButton>
    </Wrapper>
  );
};

export default ButtonWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
`;
