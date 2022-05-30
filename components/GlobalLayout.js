import Header from './Header'
import Footer from './Footer'
import React, { useState } from "react";
import styles from "../styles/components/GlobalLayout.module.css";
import { isLg } from '../hooks/media';

export default function GlobalLayout({ children }) {

  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const isLgScreen = isLg();

  return (
    <React.Fragment>
      <Header setHeaderMenuOpen={setHeaderMenuOpen} />
      <main className={headerMenuOpen && isLgScreen ? styles.opaque : null}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}