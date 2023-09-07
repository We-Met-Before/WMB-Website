"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Rellax from "rellax";
import { useExtLoaderContext } from "../../root/loader";
import NavBar from "../NavBar/NavBar";
import VideoComplete from "../videoComplete/videoComplete";
import styles from "./Hero.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

export default function Hero() {
  const titleRef = useRef([]);
  const bodyRef = useRef(null);
  
  const [hasSplitText] = useExtLoaderContext(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    var rellax = Rellax(".rellax");

    return () => {
      rellax.destroy();
    }
  }, [Rellax]);

  useEffect(() => {
    if (titleRef.current && hasSplitText) {
      gsap.registerPlugin(SplitText);

      var tl = gsap.timeline();

      setIsAnimating(true);

      const chars = new SplitText(titleRef.current, {
        type: "words,chars",
      }).chars;

      tl.from(chars, {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
        stagger: 0.018,
        delay: 1.5,
      });

      tl.from(
        bodyRef.current,
        {
          opacity: 0,
          y: 32,
          delay: 0,
          duration: 1,
          stagger: 1,
        },
        "4"
      );

      return () => {
        tl.kill();
      };
    }
  }, [hasSplitText]);

  return (
    <header className={`${styles.hero} ${isAnimating ? styles['hero--is-animating'] : ''}`}>
      <div className={`${styles.bg} rellax`}>
        <VideoComplete
          src={"videos/Header_Cropped_WEBM"}
          loop={"videos/Header_Heartbeat_Cropped_WEBM"}
        />
      </div>

      <div className={styles.content}>
        <h1
          className={cn(styles.title, "rellax")}
          data-rellax-speed="2"
        >
          <span ref={el => titleRef.current[0] = el} className={`${styles.title__line} text--left`}>Because</span>
          <span ref={el => titleRef.current[1] = el} className={`${styles.title__line} text--center`}>we met</span>
          <span ref={el => titleRef.current[2] = el} className={`${styles.title__line} text--right`}>before</span>
        </h1>

        <h1 className={styles["title--mobile"]}>
          Because we met before
        </h1>
        <div
          className={cn(styles.body, "rellax", {
            "o--0": !isAnimating,
          })}
          ref={bodyRef}
          data-rellax-speed="1"
        >
          <p className="text--light">
            Based on your Visual Identity and/or brandguide we start creating a
            webdesign and forge your vision into an online pressence.
          </p>

          <Link className="hero__cta button" href="#more">
            <span className="button__label">More</span>
          </Link>
        </div>
      </div>

      <div className={styles.navbar}>
        <NavBar />
      </div>
    </header>
  );
}
