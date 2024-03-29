import styled from "styled-components";

export default function SecondLayer() {
  return <SecondLayerContainer />;
}

const SecondLayerContainer = styled.div`
  background-image: url("/assets/particle_pc.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;

  // 태블릿 크기에 대한 미디어 쿼리
  @media (max-width: 960px) {
    background-image: url("/assets/particle_tablet.jpg"); // 태블릿용 이미지
  }

  // 모바일 크기에 대한 미디어 쿼리
  @media (max-width: 480px) {
    background-image: url("/assets/particle_phone.jpg"); // 모바일용 이미지
    height: 1270px;
  }
`;
