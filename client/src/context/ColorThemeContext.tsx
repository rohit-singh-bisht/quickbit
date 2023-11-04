import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { themeStyles } from "../shared/themeStyles";

export type Theme = "light" | "dark";

export interface ThemeColor {
  primaryPink: string;
  primaryBlue: string;
  background: string;
  text: string;
  textGrey: string;
  gradient: string;
  gradientRadial: string;
  border: string;
}

interface props {
  children: ReactNode;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  themeColor: ThemeColor;
}

const ColorThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  themeColor: themeStyles["dark"],
});

const ColorThemeContextProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [themeColor, setThemeColor] = useState<ThemeColor>(themeStyles["dark"]);

  useEffect(() => {
    setThemeColor(themeStyles[theme]);
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      return;
    }
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ColorThemeContext.Provider value={{ theme, toggleTheme, themeColor }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ColorThemeContext);

export { ColorThemeContextProvider, useThemeContext };
