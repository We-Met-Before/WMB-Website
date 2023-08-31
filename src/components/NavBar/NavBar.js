"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className="hero__branding branding--text">
          <span>WMB</span>
          <span>Creative Studio</span>
        </div>

        <button
          className={`${styles.button} ${
            isActive ? styles["button--active"] : ""
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className={styles.icon}>
            <span className={styles.icon__bar}></span>
            <span className={styles.icon__bar}></span>
            <span className={styles.icon__bar}></span>
          </div>
        </button>

        <ul className="hero__nav nav d--none--sm">
          <Link className="nav__link" href="#services">
            Services
          </Link>
          <Link className="nav__link" href="/about">
            About
          </Link>
          <Link className="nav__link" href="#work">
            Work
          </Link>
          <Link className="nav__link" href="contact">
            Contact
          </Link>
        </ul>
        {isActive && (
          <nav className={styles.menu}>
            <div className="container">
              <ul className={styles.menu__list}>
                <Link className={styles.menu__link} href="#services">
                  <h2>Services</h2>
                </Link>
                <Link className={styles.menu__link} href="/about">
                  <h2>About</h2>
                </Link>
                <Link className={styles.menu__link} href="#work">
                  <h2>Work</h2>
                </Link>
                <Link className={styles.menu__link} href="contact">
                  <h2>Contact</h2>
                </Link>
              </ul>
            </div>
          </nav>
        )}
      </nav>
    </>
  );
}
