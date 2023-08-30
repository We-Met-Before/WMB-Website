"use client";

import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [collaps, setCollaps] = React.useState(0);
  
  

  return (
    <section className={styles.wrapper}>
     <h2>A very nice footer </h2>
    </section>
  );
}