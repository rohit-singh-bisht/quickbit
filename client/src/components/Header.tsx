import React from "react";
import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";
import { Styles } from "../interfaces";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderStyled themeColor={themeColor}>
      <Link to={"/"} className="logo">
        Quickbit
      </Link>
      <div className="login__buttons">
        {location?.pathname !== "/login" && (
          <Button
            type="secondary"
            title="Login"
            className="login"
            onClick={() => navigate("/login")}
          />
        )}
        {location?.pathname !== "/register" && (
          <Button
            type="primary"
            title="Register"
            className="register"
            onClick={() => navigate("/register")}
          />
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
