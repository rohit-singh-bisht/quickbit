import React, { createContext } from "react";

type Theme = "light" | "dark";

interface ColorTheme {
  primary: String;
  secondary: String;
  Tertiary: String;
}

const ColorThemeContext = createContext<Theme>("dark");
