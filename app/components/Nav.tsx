"use client";

import { useState } from "react";
import styles from "./Nav.module.css";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <a href="/" className={styles.navLogo}>DailyPray</a>
        <div className={styles.navLinks}>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/privacy" className={styles.navLink}>Privacy Policy</a>
          <a href="#" className={styles.navLink}>Changelog</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </div>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuLinks}>
          <a href="/about" className={styles.mobileMenuLink} onClick={() => setMenuOpen(false)}>About</a>
          <a href="/privacy" className={styles.mobileMenuLink} onClick={() => setMenuOpen(false)}>Privacy Policy</a>
          <a href="#" className={styles.mobileMenuLink} onClick={() => setMenuOpen(false)}>Changelog</a>
          <a href="/contact" className={styles.mobileMenuLink} onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
}
