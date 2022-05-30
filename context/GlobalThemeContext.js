
import { createContext, useContext } from "react";
import { BaseTheme } from "../themes/base.theme";

export const GlobalThemeContext = createContext(BaseTheme);

export const useGlobalThemeContext = () => {
  return useContext(GlobalThemeContext);
};