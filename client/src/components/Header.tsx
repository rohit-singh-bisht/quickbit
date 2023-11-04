import React from "react";
import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";

interface HeaderProps {
  themeColor: { gradient: string };
}

const HeaderStyled = styled.header<HeaderProps>`
  padding: 4rem 5.5rem;
  .logo {
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.4rem;
    background-image: ${({ themeColor }) => themeColor?.gradient};
    color: transparent;
    -webkit-background-clip: text;
  }
`;

const Header: React.FC = () => {
  const { themeColor } = useThemeContext();

  return (
    <HeaderStyled themeColor={themeColor}>
      <div className="logo">Quickbit</div>
    </HeaderStyled>
  );
};

export default Header;
