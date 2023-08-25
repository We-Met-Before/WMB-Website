"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./WorkList.module.scss";
import React from "react";
import IdeasBGImage from "public/images/ideas__background.png";

export default function WorkList() {
  const [collaps, setCollaps] = React.useState(0);

  return (
    <section className={styles.wrapper}>
      <div className="container flex--between">
        <header>
          <h1>Work</h1>
          <p>You should be inspired by our greatly writtin storytelling texts above but lets take you on a journey through our projects.</p>
        </header>

        <Link href="#contact" className="button">
          Start a project
        </Link>

      </div>
      <div>
        Hier komt een lijst aan projecten
      </div>
    </section>
  );
}
