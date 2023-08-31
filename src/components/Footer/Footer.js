"use client";

import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h2 className="text--center">(4) Ways to get in touch</h2>

        <ul className={styles["list--cards"]}>
          <Link href="mailto:wemetbefore@info.com" className={styles.card}>
            <span className={styles.badge}>Best One</span>

            <div className={styles.card__body}>
              <h4>Email</h4>
              <p className="d--none--sm text--light">wemetbefore@info.com</p>
              <small className="d--sm d--none text--light">wemetbefore@info.com</small>
            </div>
          </Link>

          <Link href="mailto:wemetbefore@info.com" className={styles.card}>
            <span className={styles.badge}>Best One</span>

            <div className={styles.card__body}>
              <h4>Email</h4>
              <p className="d--none--sm text--light">wemetbefore@info.com</p>
              <small className="d--sm d--none text--light">wemetbefore@info.com</small>
            </div>
          </Link>

          <Link href="mailto:wemetbefore@info.com" className={styles.card}>
            <span className={styles.badge}>Best One</span>

            <div className={styles.card__body}>
              <h4>Email</h4>
              <p className="d--none--sm text--light">wemetbefore@info.com</p>
              <small className="d--sm d--none text--light">wemetbefore@info.com</small>
            </div>
          </Link>

          <Link href="mailto:wemetbefore@info.com" className={styles.card}>
            <span className={styles.badge}>Best One</span>

            <div className={styles.card__body}>
              <h4>Email</h4>
              <p className="d--none--sm text--light">wemetbefore@info.com</p>
              <small className="d--sm d--none text--light">wemetbefore@info.com</small>
            </div>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
