import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";

const SavingStatusPage = () => {
  const {
    userName,
    setUserName,
    allowance,
    setAllowance,
    amountToSave,
    setAmountToSave,
    goal,
    setGoal,
    amountsaved,
    setAmountSaved,
  } = React.useContext(UserInfoContext);
  const history = useHistory();

  return (
    <Wrapper>
      <Logo />
      <SubHeader>{userName.toUpperCase()}'s SAVING STATUS</SubHeader>
      <HowMuchDiv>
        <HowMuchDivLeft>
          HOW MUCH YOU'VE SAVED<AmountDiv>$0</AmountDiv>
        </HowMuchDivLeft>
        <HowMuchDivRight>
          HOW MUCH IS REMAINING<AmountDiv>${amountToSave}</AmountDiv>
        </HowMuchDivRight>
      </HowMuchDiv>
      <ButtonsDiv>
        <DepositInput></DepositInput>
        <DepositButton>DEPOSIT</DepositButton>
        <WithdrawInput></WithdrawInput>
        <WithdrawButton>WITHDRAW</WithdrawButton>
      </ButtonsDiv>
      <TableDiv>
        <Table>
          <TableRow>
            <TableHeader>DATE</TableHeader>
            <TableHeader>DEPOSITS</TableHeader>
            <TableHeader>WITHDRAWALS</TableHeader>
            <TableHeader>TOTAL</TableHeader>
          </TableRow>
          <TableRow>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </TableRow>
        </Table>
      </TableDiv>
      <MainButton>BACK</MainButton>
    </Wrapper>
  );
};

export default SavingStatusPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
`;

const HowMuchDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 30px 60px;
  font-weight: 700;
  font-size: 18px;
`;

const HowMuchDivLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 60px;
`;

const HowMuchDivRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 60px;
`;

const AmountDiv = styled.div`
  background-color: white;
  height: 30px;
  width: 200px;
  margin: 5px;
  text-align: center;
  padding: 5px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const DepositInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 175px;
  padding: 5px;
  opacity: 0.6;
  margin: 0 10px;
`;

const WithdrawInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 175px;
  padding: 5px;
  opacity: 0.6;
  margin: 0 10px;
`;

const DepositButton = styled.button`
  background-color: #6ced8c;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 175px;
  padding: 5px;
  opacity: 0.6;
  margin: 0 10px;
`;

const WithdrawButton = styled.button`
  background-color: red;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 175px;
  padding: 5px;
  opacity: 0.6;
  margin: 0 10px;
`;

const TableDiv = styled.div`
  background-color: white;
  width: 600px;
  margin: 30px 0;
`;

const Table = styled.table`
  border: 2px solid #febdc6;
  width: 100%;
  font-size: 18px;
`;

const TableRow = styled.tr`
  padding: 10px;
`;

const TableHeader = styled.th`
  padding: 10px;
`;
