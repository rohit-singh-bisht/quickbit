import React, { createContext, useState, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

interface props {
  children: ReactNode;
}

interface ThemeContextType {
  theme: Theme,
  toggleTheme: () => void
}

const ColorThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {}
});

const ColorThemeContextProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark")

  const toggleTheme = () => {
    setTheme((prevTheme: string) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  };

  return <ColorThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ColorThemeContext.Provider>;
};

const useThemeContext = () => useContext(ColorThemeContext);

export { ColorThemeContextProvider, useThemeContext };
