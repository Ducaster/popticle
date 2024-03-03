import styled from "styled-components";
import Header from "../components/Header";
import FirstLayer from "./FirstLayer";
import SecondLayer from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";
import FourthLayer from "./FourthLayer";
import FifthLayer from "./FifthLayer";

export default function Main() {
  return (
    <>
      <Header />
      <MainContainer>
        <FirstLayer />
        <SecondLayer />
        <ThirdLayer />
        <FourthLayer />
        <FifthLayer />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
