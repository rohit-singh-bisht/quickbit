import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { themeStyles } from "../shared/themeStyles";

export type Theme = "light" | "dark";

interface ThemeColor {
  primaryPink: string;
  primaryBlue: string;
  background: string;
  text: string;
  textGrey: string;
  gradient: string;
  gradientRadial: string;
}

interface props {
  children: ReactNode;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  themeColor: ThemeColor | undefined;
}

const ColorThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  themeColor: undefined,
});

const ColorThemeContextProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [themeColor, setThemeColor] = useState<ThemeColor | undefined>(
    undefined
  );

  useEffect(() => {
    setThemeColor(themeStyles[theme]);
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
