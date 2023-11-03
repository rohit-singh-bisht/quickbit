import { useThemeContext } from "../context/ColorThemeContext";
import styled from "styled-components";

interface Styles {}

const ToggleThemeStyle = styled.div<Styles>``;

const ToggleTheme = () => {
  const { toggleTheme, themeColor } = useThemeContext();

  return <ToggleThemeStyle>ToggleTheme</ToggleThemeStyle>;
};

export default ToggleTheme;
