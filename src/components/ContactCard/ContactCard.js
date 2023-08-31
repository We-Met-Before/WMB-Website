"use client";

import React from "react";
import styles from "./ContactCard.module.scss";
import Link from "next/link";

export default function ContactCard({href, badge, title, link}) {
  return (
    <Link href="mailto:wemetbefore@info.com" className={styles.card}>
      <span className={"badge"}>Best One</span>

      <div className={styles.card__body}>
        <h4>Email</h4>
        <p className="d--none--sm text--light">wemetbefore@info.com</p>
        <small className="d--sm d--none text--light">
          wemetbefore@info.com
        </small>
      </div>
    </Link>
  );
}
