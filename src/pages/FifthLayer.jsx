import styled from "styled-components";

export default function FifthLayer() {
  return <FifthLayerContainer />;
}

const FifthLayerContainer = styled.div`
  background-image: url("/assets/review_pc-2.jpg");
  background-size: cover;
  background-position: center;
  height: 6600px;

  // 태블릿 크기에 대한 미디어 쿼리
  @media (max-width: 960px) {
    background-image: url("/assets/review_tablet-2.jpg"); // 태블릿용 이미지
    height: 4576px;
  }

  // 모바일 크기에 대한 미디어 쿼리
  @media (max-width: 480px) {
    background-image: url("/assets/review_phone-2.jpg"); // 모바일용 이미지
    height: 3668px;
  }
`;
