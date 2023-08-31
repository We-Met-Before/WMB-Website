"use client";

import Image from "next/image";
import styles from "./HeroProject.module.scss";

export default function HeroProject({ image, transitioning, innerRef }) {
  return (
    <>
      {image && (
        <header
          ref={innerRef}
          className={`${styles.hero} ${
            transitioning ? styles["hero--transitioning"] : ""
          }`}
        >
          <Image src={image} width={200} height={200} />
        </header>
      )}
    </>
  );
}
