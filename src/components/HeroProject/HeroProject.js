"use client";

import Image from "next/image";
import styles from "./HeroProject.module.scss";
import { useEffect } from "react";

export default function HeroProject({ image, alt, transitioning, innerRef }) {
  console.log(image);
  useEffect(() => {
    console.log(image);
  }, [image])
  return (
    <>
      {image && (
        <header
          ref={innerRef}
          className={`${styles.hero} ${
            transitioning ? styles["hero--transitioning"] : ""
          }`}
        >
          <Image src={image} width={200} height={200} alt={alt} />
        </header>
      )}
    </>
  );
}
