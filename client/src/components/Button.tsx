import React from "react";
import { Styles } from "../interfaces";
import styled from "styled-components";
import { useThemeContext } from "../context/ColorThemeContext";

interface props {
  onClick?: () => void;
  title: string;
  type: string;
  className: string;
}

const ButtonStyle = styled.button<Styles>`
  &.button {
    padding: 2.1rem 3.7rem;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.8rem;
    color: #fff;
    border-radius: 4.8rem;
    transition: all 0.3s;
    &.secondary {
      border: 0.1rem solid ${({ themeColor }) => themeColor?.border};
      background: ${({ themeColor }) => themeColor?.textGrey};
      &:hover {
        box-shadow: 0rem 0rem 2.2rem 0rem rgba(20, 78, 227, 0.38);
        background: ${({ themeColor }) => themeColor?.primaryBlue};
      }
    }
    &.primary {
      border: 0.1rem solid ${({ themeColor }) => themeColor?.primaryBlue};
      background: ${({ themeColor }) => themeColor?.primaryBlue};
      &:hover {
        background: ${({ themeColor }) => themeColor?.textGrey};
        box-shadow: 0rem 0rem 2.2rem 0rem rgba(20, 78, 227, 0.38);
      }
    }
  }
`;

const Button: React.FC<props> = (props) => {
  const { title, onClick, type, className, ...otherProps } = props;
  const { themeColor } = useThemeContext();
  return (
    <ButtonStyle
      className={`button ${type ? type : ""} ${className}`}
      themeColor={themeColor}
      onClick={onClick}
      {...otherProps}
    >
      {title}
    </ButtonStyle>
  );
};

export default Button;
