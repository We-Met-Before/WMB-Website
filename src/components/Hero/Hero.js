"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import React, { useEffect, useRef } from "react";
import Splitting from "splitting";
import { gsap } from "gsap";
import Rellax from "rellax";
import NavBar from "../NavBar/NavBar";

export default function Hero() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const CTARef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      let splitResult = Splitting({ target: titleRef.current, by: "chars" });

      Rellax(imageRef.current);

      var tl = gsap.timeline();

      tl.from(splitResult[0].chars, {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
        stagger: 0.018,
      });

      tl.from(imageRef.current, {
        opacity: 0,
        duration: 1,
      });

      tl.from(
        bodyRef.current,
        {
          opacity: 0,
          y: 32,
          duration: 1,
          stagger: 1,
        },
        "<-1"
      );

      console.log("oi");
    }
  });

  return (
    <header className={styles.hero}>
      <div className={styles.bg}>
        {/* <Image src={HeroBGImage} priority={true} alt="deco" ref={imageRef} data-rellax-speed="4" /> */}
        <video autoPlay muted playsInline>
          <source
            src="https://rotato.netlify.app/alpha-demo/movie-hevc.mov"
            type='video/mp4; codecs="hvc1"'
          />
          <source src="videos/Header_Cropped_WEBM.webm" type="video/webm" />
        </video>
      </div>

      <div className={styles.content}>
        <h1 className={`${styles.title} d--none--sm`} ref={titleRef}>
          <span className={styles.title__line}>Because</span>
          <span className={`${styles.title__line} text--center`}>we met</span>
          <span className={`${styles.title__line} text--right`}>before</span>
        </h1>

        <h1 className="d--none d--sm" ref={titleRef}>
          Because we met before
        </h1>
        <div className={styles.body} ref={bodyRef}>
          <p className="text--light">
            Based on your Visual Identity and/or brandguide we start creating a
            webdesign and forge your vision into an online pressence.
          </p>

          <Link className="hero__cta button" href="#more">
            More
          </Link>
        </div>
      </div>

      <div className={styles.navbar}>
        <NavBar />
      </div>
    </header>
  );
}
