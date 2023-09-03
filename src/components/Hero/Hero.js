"use client";

import { gsap } from "gsap";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import Rellax from "rellax";
import NavBar from "../NavBar/NavBar";
import VideoComplete from "../videoComplete/videComplete";
import styles from "./Hero.module.scss";

export default function Hero() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const CTARef = useRef(null);
  const bodyRef = useRef(null);
  const introVideoRef = useRef(null);
  const loopVideoRef = useRef(null);
  const [hasSplitText, setHasSplitText] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (titleRef.current && hasSplitText) {
      gsap.registerPlugin(SplitText);

      Rellax('.rellax');

      var tl = gsap.timeline();
      setIsAnimating(true);

      const chars = new SplitText(`.${styles.title__line}`, { type: "words,chars" }).chars;
      tl.from(
        chars,
        {
          y: "100%",
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
          stagger: 0.018,
          delay: 3,
        }
      );

      tl.from(
        bodyRef.current,
        {
          opacity: 0,
          y: 32,
          duration: 1,
          stagger: 1,
        },
        "4"
      );
    }
  }, [hasSplitText]);

  return (
    <header className={styles.hero}>
      <Script
        src="/about/packages/SplitText.min.js"
        onLoad={() => setHasSplitText(true)}
      />

      <div className={`${styles.bg} rellax`}>
        <VideoComplete src={"videos/Header_Cropped_WEBM"} loop={"videos/Header_Heartbeat_Cropped_WEBM"}/>
      </div>

      <div className={styles.content}>
        <h1 className={`${styles.title} d--none--sm rellax ${isAnimating ? '' : 'o--0'}`} ref={titleRef} data-rellax-speed="2" >
          <span className={`${styles.title__line} text--left`}>Because</span>
          <span className={`${styles.title__line} text--center`}>we met</span>
          <span className={`${styles.title__line} text--right`}>before</span>
        </h1>

        <h1 className="d--none d--sm ${isAnimating ? '' : 'o--0'}" ref={titleRef}>
          Because we met before
        </h1>
        <div className={`${styles.body} ${isAnimating ? '' : 'o--0'} rellax`} ref={bodyRef} data-rellax-speed="1">
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
