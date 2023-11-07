import React from "react";
import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";
import { Styles } from "../interfaces";
import { Link } from "react-router-dom";
import Button from "./Button";

const HeaderStyled = styled.header<Styles>`
  padding: 4rem 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.4rem;
    background-image: ${({ themeColor }) => themeColor?.gradientRadial};
    background-position: 1rem 2.4rem;
    color: transparent;
    -webkit-background-clip: text;
    display: inline-block;
  }
  .login__buttons {
    display: flex;
    gap: 2rem;
  }
`;

const Header: React.FC = () => {
  const { themeColor } = useThemeContext();

  return (
    <HeaderStyled themeColor={themeColor}>
      <Link to={"/"} className="logo">
        Quickbit
      </Link>
      <div className="login__buttons">
        <Button type="secondary" title="Login" className="login" />
        <Button type="primary" title="Register" className="register" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
