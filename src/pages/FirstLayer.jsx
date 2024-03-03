import styled from "styled-components";

export default function FirstLayer() {
  return <FirstLayerContainer />;
}

const FirstLayerContainer = styled.div`
  background-image: url("/assets/main_pc.png");
  background-size: cover;
  background-position: center;
  height: 100vh;

  // 태블릿 크기에 대한 미디어 쿼리
  @media (max-width: 960px) {
    background-image: url("/assets/main_tablet.png"); // 태블릿용 이미지
  }

  // 모바일 크기에 대한 미디어 쿼리
  @media (max-width: 480px) {
    background-image: url("/assets/main_phone.png"); // 모바일용 이미지
  }
`;
