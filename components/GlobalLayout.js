import Header from './Header'
import Footer from './Footer'
import { useState } from "react";
import styles from "../styles/components/GlobalLayout.module.css";

export default function GlobalLayout({ children }) {

  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);

  return (
    <>
      <Header setHeaderMenuOpen={ setHeaderMenuOpen }/>
      <main className={headerMenuOpen ? styles.opaque : null}>
        {children}
      </main>
      <Footer />
    </>
  )
}