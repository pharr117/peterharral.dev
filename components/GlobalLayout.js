import Header from './Header'
import Main from './Main'
import React, { useState, useEffect } from "react";
import { isLg } from '../hooks/media';
import { BaseTheme } from "../themes/base.theme.js";
import { MintTheme } from "../themes/mint.theme.js";
import { GlobalThemeContext } from '../context/GlobalThemeContext';
import { GlobalRamblingsContext, getGlobalRamblingsRequest } from '../context/GlobalRamblingsContext';

export default function GlobalLayout({ children }) {

  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const isLgScreen = isLg();

  const [ramblingsContext, setRamblingsContext] = useState({})

  useEffect(() => {
    getGlobalRamblingsRequest().then((val) => setRamblingsContext(val));
  }, []);

  return (
    <React.Fragment>
      <GlobalThemeContext.Provider value={BaseTheme}>
        <GlobalRamblingsContext.Provider value={ramblingsContext}>
          <Header setHeaderMenuOpen={setHeaderMenuOpen} />
          <Main headerMenuOpen={headerMenuOpen} isLgScreen={isLgScreen}>{children}</Main>
        </GlobalRamblingsContext.Provider>
      </GlobalThemeContext.Provider>
    </React.Fragment>
  )
}