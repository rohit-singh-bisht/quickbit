import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";
import { Styles } from "../interfaces";

const ToggleThemeStyle = styled.div<Styles>`
  width: 27rem;
  height: 5.8rem;
  padding: 2.1rem 0rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
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
    width: 50%;
    color: #c9ced6;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.8rem;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in;
    cursor: pointer;
    padding: 2.1rem 2.5rem;
    position: relative;
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
  .active__bar {
    border-radius: 4.8rem;
    border: 1px solid ${({ themeColor }) => themeColor?.primaryBlue};
    background: ${({ themeColor }) => themeColor?.primaryBlue};
    box-shadow: 0rem 0rem 1.4rem 0rem rgba(20, 78, 227, 0.38);
    width: calc(50% - 0.6rem);
    position: absolute;
    left: 0.6rem;
    top: 0.6rem;
    height: 4.4rem;
    transition: all 0.3s;
  }
`;

const ToggleTheme = () => {
  const { toggleTheme, themeColor, theme } = useThemeContext();

  return (
    <ToggleThemeStyle themeColor={themeColor}>
      <div
        className="active__bar"
        style={{
          transform: `translateX(${theme === "light" ? "0px" : "100%"})`,
        }}
      />
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
