import React from "react";
import styled from "styled-components";
import MainButton from "./buttons/mainButton";
import Logo from "./logo";
import SubHeader from "./SubHeader";
import { UserInfoContext } from "../UserInfoContext";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import PiggyImg from "../assets/piggybank.png";

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
    ledger,
    setLedger,
  } = React.useContext(UserInfoContext);
  const [depositAmount, setDepositAmount] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState("");

  const history = useHistory();

  return (
    <Wrapper>
      <Logo />
      <SubHeader>{userName.toUpperCase()}'S SAVING STATUS</SubHeader>
      <PiggyWrapper>
        <Piggy src={PiggyImg} />
      </PiggyWrapper>{" "}
      <ProgressBar
        value={(amountsaved / amountToSave) * 100}
        max="100"
      ></ProgressBar>
      {(amountsaved / amountToSave) * 100 >= 100 && <h2>GOAL COMPLETED!</h2>}
      <HowMuchDiv>
        <HowMuchDivLeft>
          HOW MUCH YOU'VE SAVED<AmountDiv>${amountsaved}</AmountDiv>
        </HowMuchDivLeft>
        <HowMuchDivRight>
          HOW MUCH IS REMAINING
          <AmountDiv>
            ${amountToSave - amountsaved >= 0 ? amountToSave - amountsaved : 0}
          </AmountDiv>
        </HowMuchDivRight>
      </HowMuchDiv>
      <ButtonsDiv>
        <DepositButton
          onClick={() => {
            const numberSaved = amountsaved === "" ? 0 : parseInt(amountsaved);
            const depositSaved =
              depositAmount === "" ? 0 : parseInt(depositAmount);
            const total = depositSaved + numberSaved;

            setAmountSaved(total);

            const object = {
              date: dayjs().format("YYYY/MM/DD HH:mm"),
              total: total,
              deposit: depositAmount,
              withdraw: "",
            };
            const array = [...ledger, object];
            setLedger(array);
          }}
        >
          +
          <DepositInput
            type="number"
            placeholder="$0"
            onClick={(e) => {
              e.stopPropagation();
            }}
            value={depositAmount}
            onChange={(e) => {
              setDepositAmount(e.target.value);
            }}
          />
          DEPOSIT
        </DepositButton>
        <WithdrawButton
          onClick={() => {
            const numberSaved = amountsaved === "" ? 0 : parseInt(amountsaved);
            const withdrawSaved =
              withdrawAmount === "" ? 0 : parseInt(withdrawAmount);
            const total = numberSaved - withdrawSaved;
            setAmountSaved(total);
            const object = {
              date: dayjs().format("YYYY/MM/DD HH:mm"),
              total: total,
              deposit: "",
              withdraw: withdrawAmount,
            };
            const array = [...ledger, object];
            setLedger(array);
          }}
        >
          -
          <WithdrawInput
            type="number"
            placeholder="$0"
            onClick={(e) => {
              e.stopPropagation();
            }}
            value={withdrawAmount}
            onChange={(e) => {
              setWithdrawAmount(e.target.value);
            }}
          />
          WITHDRAW
        </WithdrawButton>
      </ButtonsDiv>
      <TableDiv>
        <Table>
          <TableRow>
            <TableHeader>DATE</TableHeader>
            <TableHeader>DEPOSITS</TableHeader>
            <TableHeader>WITHDRAWALS</TableHeader>
            <TableHeader>TOTAL</TableHeader>
          </TableRow>
          {ledger
            .map((entrie) => {
              return (
                <TableRow>
                  <Td>{entrie.date}</Td>
                  <Td>{entrie.deposit}</Td>
                  <Td>{entrie.withdraw}</Td>
                  <Td>{entrie.total}</Td>
                </TableRow>
              );
            })
            .reverse()}
          <TableRow>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </TableRow>
        </Table>
      </TableDiv>
      <MainButton
        onClick={() => {
          history.goBack();
        }}
      >
        BACK
      </MainButton>
    </Wrapper>
  );
};

export default SavingStatusPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  @media (max-width: 768px) {
    padding: 20px;
`;

const HowMuchDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 30px 60px;
  font-weight: 700;
  font-size: 14px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
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
  width: 100px;
  padding: 5px;
  margin: 0 10px;
  @media (max-width: 768px) {
    width: 70px;
    height: 30px;
    margin: 2px 10px 10px 10px;
  }
`;

const WithdrawInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 100px;
  padding: 5px;
  margin: 0 10px;
  @media (max-width: 768px) {
    width: 70px;
    height: 30px;
    margin: 2px 10px 10px 10px;
  }
`;

const DepositButton = styled.button`
  background-color: #6ced8c;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 150px;
  padding: 5px;
  opacity: 0.8;
  margin: 0 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100px;
    padding: 5px;
  }
`;

const WithdrawButton = styled.button`
  background-color: red;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  width: 150px;
  padding: 5px;
  opacity: 0.8;
  margin: 0 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100px;
    padding: 5px;
  }
`;

const TableDiv = styled.div`
  background-color: white;
  width: 600px;
  margin: 30px 0;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 320px;
    margin: 20px 0;
    border-radius: 20px;
  }
`;

const Table = styled.table`
  border: 2px solid #febdc6;
  width: 100%;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TableRow = styled.tr`
  padding: 10px;
  border: 2px solid #fee4e8;
  @media (max-width: 768px) {
    border: 1px solid #fee4e8;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #fee4e8;
`;

const Td = styled.td`
  text-align: center;
  padding: 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 1px 5px;
  }
`;

const PiggyWrapper = styled.div`
  position: relative;
  width: 100px;
`;
const Piggy = styled.img`
  width: 100px;
  position: absolute;
  top: -60px;
  right: -300px;
  @media (max-width: 768px) {
    right: -80px;
    width: 50px;
    top: -20px;
  }
`;

const ProgressBar = styled.progress`
  width: 500px;
  height: 50px;
  @media (max-width: 768px) {
    width: 200px;
    height: 25px;
  }
`;
