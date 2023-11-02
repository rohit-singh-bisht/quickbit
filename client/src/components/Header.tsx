import React from "react";
import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";

interface HeaderProps {
  themeColor:
    | {
        gradient: string;
      }
    | undefined;
}

const HeaderStyled = styled.header<HeaderProps>`
  padding: 40px 55px;
  .logo {
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: 44px;
    background-image: ${({ themeColor }) => themeColor?.gradient};
    color: transparent;
    -webkit-background-clip: text;
  }
`;

const Header: React.FC = () => {
  const { themeColor } = useThemeContext();
  console.log("themeColor", themeColor);

  return (
    <HeaderStyled themeColor={themeColor}>
      <div className="logo">Quickbit</div>
    </HeaderStyled>
  );
};

export default Header;
