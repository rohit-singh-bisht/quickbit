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
  width: 27rem;
  height: 5.8rem;
  padding: 2.1rem 2.5rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.4rem;
  position: fixed;
  right: 5rem;
  top: calc(50% + 16.4rem);
  transform-origin: top right;
  transform: translateY(-50%) rotate(90deg);
  border-radius: 4.8rem;
  border: 0.1rem solid ${({ themeColor }) => themeColor?.border};
  background: ${({ themeColor }) => themeColor?.textGrey};
  box-shadow: 0rem 0.4rem 1rem 0rem rgba(0, 0, 0, 0.1);
  .toggle__div {
    color: #c9ced6;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.8rem;
    display: flex;
    transition: all 0.3s ease-in;
    cursor: pointer;
    padding: 2.1rem 2.5rem;
    &.active {
      font-weight: 700;
    }
  }
  .light__theme {
    gap: 1.5rem;
  }
  .dark__theme {
    gap: 1rem;
  }
`;

const ToggleTheme = () => {
  const { toggleTheme, themeColor, theme } = useThemeContext();

  return (
    <ToggleThemeStyle themeColor={themeColor}>
      <div
        onClick={toggleTheme}
        className={`light__theme toggle__div ${
          theme === "light" ? "active" : ""
        }`}
      >
        Light
      </div>
      <div
        onClick={toggleTheme}
        className={`dark__theme toggle__div ${
          theme === "dark" ? "active" : ""
        }`}
      >
        Dark
      </div>
    </ToggleThemeStyle>
  );
};

export default ToggleTheme;
