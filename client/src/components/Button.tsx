import React from "react";
import { Styles } from "../interfaces";
import styled from "styled-components";
import { useThemeContext } from "../context/ColorThemeContext";

interface props {
  onClick: () => void;
  title: string;
  type: string;
}

const ButtonStyle = styled.button<Styles>``;

const Button: React.FC<props> = (props) => {
  const { title, onClick, type } = props;
  const { themeColor } = useThemeContext();
  return (
    <ButtonStyle
      className={`button ${type ? type : ""}`}
      themeColor={themeColor}
      onClick={onClick}
    >
      {title}
    </ButtonStyle>
  );
};

export default Button;
