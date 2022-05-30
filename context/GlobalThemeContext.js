
import { createContext, useContext } from "react";
import { BaseTheme } from "../themes/base.theme";

export const GlobalThemeContext = createContext(BaseTheme);

export const useGlobalThemeContext = () => {
  return useContext(GlobalThemeContext);
};

export const useGlobalColors = () => {
  return useGlobalThemeContext()?.colors;
}

export const useGlobalTextColors = () => {
  return useGlobalColors()?.text;
}

export const useGlobalBorderColors = () => {
  return useGlobalColors()?.border;
}

export const useGlobalBackgroundColors = () => {
  return useGlobalColors()?.background;
}