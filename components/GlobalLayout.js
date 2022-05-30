import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React, { useState, createContext } from "react";
import { isLg } from '../hooks/media';
import { BaseTheme } from "../themes/base.theme.js";
import { GlobalThemeContext } from '../context/GlobalThemeContext';

export default function GlobalLayout({ children }) {

  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const isLgScreen = isLg();

  return (
    <React.Fragment>
      <GlobalThemeContext.Provider value={BaseTheme}>
        <Header setHeaderMenuOpen={setHeaderMenuOpen} />
          <Main headerMenuOpen={headerMenuOpen} isLgScreen={isLgScreen}>{children}</Main>
        <Footer />
      </GlobalThemeContext.Provider>
    </React.Fragment>
  )
}