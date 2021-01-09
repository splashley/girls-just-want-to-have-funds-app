import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import { useHistory } from "react-router-dom";

const ButtonWrapper = ({ nextLink }) => {
  const history = useHistory();
  return (
    <Wrapper>
      <MainButton
        onClick={() => {
          history.goBack();
        }}
      >
        BACK
      </MainButton>
      <MainButton
        onClick={() => {
          history.push(`${nextLink}`);
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
