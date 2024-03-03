import styled from "styled-components";

export default function ThirdLayer() {
  return <ThirdLayerContainer />;
}

const ThirdLayerContainer = styled.div`
  background-image: url("/assets/vision_pc.jpg");
  background-size: cover;
  background-position: center;
  height: 3230px;

  // 태블릿 크기에 대한 미디어 쿼리
  @media (max-width: 960px) {
    background-image: url("/assets/vision_tablet.jpg"); // 태블릿용 이미지
    height: 2560px;
  }

  // 모바일 크기에 대한 미디어 쿼리
  @media (max-width: 480px) {
    background-image: url("/assets/vision_phone.jpg"); // 모바일용 이미지
    height: 2921px;
  }
`;
