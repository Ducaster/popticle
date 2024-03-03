import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = () => {
  // 로고 이미지 경로를 상태로 관리합니다.
  const [logoSrc, setLogoSrc] = useState("/assets/logo_pc.png");

  // 화면 크기에 따라 로고 이미지를 변경하는 함수입니다.
  const updateLogoSource = () => {
    if (window.innerWidth <= 768 && window.innerWidth >= 480) {
      setLogoSrc("/assets/logo_tablet.png");
    } else if (window.innerWidth <= 480) {
      setLogoSrc("/assets/logo_phone.png");
    } else {
      setLogoSrc("/assets/logo_pc.png");
    }
  };

  // 컴포넌트가 마운트될 때와 창 크기가 변경될 때 로고 소스를 업데이트합니다.
  useEffect(() => {
    updateLogoSource();
    window.addEventListener("resize", updateLogoSource);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => window.removeEventListener("resize", updateLogoSource);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HeaderContainer>
      <LogoImage
        src={logoSrc} // 상태로 관리되는 이미지 경로를 사용합니다.
        alt="Popticle"
        onClick={handleLogoClick}
      />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const LogoImage = styled.img`
  cursor: pointer;
  width: 188px;
  margin-top: 10px;

  // 태블릿 크기에 대한 미디어 쿼리
  @media (max-width: 768px) {
    width: 188px;
  }

  // 모바일 크기에 대한 미디어 쿼리
  @media (max-width: 480px) {
    width: 37px;
  }
`;
