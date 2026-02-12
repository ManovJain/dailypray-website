"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LOGO, NAV_LINKS, ARIA_OPEN_MENU, ARIA_CLOSE_MENU } from "./messages";
import styles from "./styles.module.css";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>{NAV_LOGO}</Link>
        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? ARIA_CLOSE_MENU : ARIA_OPEN_MENU}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuLinks}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileMenuLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
