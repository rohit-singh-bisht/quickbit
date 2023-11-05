import React from "react";
import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";
import { Styles } from "../interfaces";
import { Link } from "react-router-dom";

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
    background-position: 10px 24px;
    color: transparent;
    -webkit-background-clip: text;
    display: inline-block;
  }
  .login__buttons {
    display: flex;
    gap: 2rem;
    button {
      padding: 2.1rem 3.7rem;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.8rem;
      color: #fff;
      border-radius: 4.8rem;
      transition: all 0.3s;
      &.login {
        border: 0.1rem solid ${({ themeColor }) => themeColor?.border};
        background: ${({ themeColor }) => themeColor?.textGrey};
        &:hover {
          box-shadow: 0rem 0rem 2.2rem 0rem rgba(20, 78, 227, 0.38);
          background: ${({ themeColor }) => themeColor?.primaryBlue};
        }
      }
      &.register {
        border: 0.1rem solid ${({ themeColor }) => themeColor?.primaryBlue};
        background: ${({ themeColor }) => themeColor?.primaryBlue};
        &:hover {
          background: ${({ themeColor }) => themeColor?.textGrey};
          box-shadow: 0rem 0rem 2.2rem 0rem rgba(20, 78, 227, 0.38);
        }
      }
    }
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
        <button className="login">Login</button>
        <button type="button" className="register">
          Register Now
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
