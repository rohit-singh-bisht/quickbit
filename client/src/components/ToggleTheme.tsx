import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";

interface Styles {
  themeColor: {
    gradient: string;
    text: string;
    border: string;
    textGrey: string;
  };
}

const ToggleThemeStyle = styled.div<Styles>`
  padding: 21px 25px;
  display: inline-flex;
  gap: 14px;
  transform-origin: center center;
  transform: translateY(-50%) rotate(90deg);
  position: fixed;
  right: 50px;
  top: 50%;
  border-radius: 48px;
  border: 1px solid ${({ themeColor }) => themeColor?.border};
  background: ${({ themeColor }) => themeColor?.textGrey};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  .light__theme {
    color: #c9ced6;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    display: flex;
    gap: 15px;
    transition: all 0.3s ease-in;
    &.active {
      font-weight: 700;
    }
  }
  .dark__theme {
    color: #c9ced6;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    display: flex;
    gap: 10px;
    transition: all 0.3s ease-in;
    &.active {
      font-weight: 700;
    }
  }
`;

const ToggleTheme = () => {
  const { toggleTheme, themeColor, theme } = useThemeContext();

  return (
    <ToggleThemeStyle themeColor={themeColor}>
      <div
        onClick={toggleTheme}
        className={`light__theme ${theme === "light" ? "active" : ""}`}
      >
        Light
      </div>
      <div
        onClick={toggleTheme}
        className={`dark__theme ${theme === "dark" ? "active" : ""}`}
      >
        Dark
      </div>
    </ToggleThemeStyle>
  );
};

export default ToggleTheme;
