"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import React from "react";
import IdeasBGImage from "public/images/ideas__background.png";
import Splitting from "splitting";

export default function Footer() {
  const [collaps, setCollaps] = React.useState(0);
  
  

  return (
    <section className={styles.wrapper}>
     <h2>A very nice footer </h2>
    </section>
  );
}