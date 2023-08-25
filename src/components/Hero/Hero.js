"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import React, { useEffect, useRef } from "react";
import HeroBGImage from "public/images/hero__background.png";
import Splitting from "splitting";
import { gsap } from "gsap";
import Rellax from "rellax";

export default function Hero() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const CTARef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      let splitResult = Splitting({ target: titleRef.current, by: "chars" });
      console.log(splitResult[0].chars);

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


      tl.from(bodyRef.current, {
        opacity: 0,
        y: 32,
        duration: 1,
        stagger: 1
      }, "<-1");

      console.log("oi");
    }
  });

  return (
    <header className={styles.hero}>
      <div className={styles.bg}>
        <Image src={HeroBGImage} priority={true} alt="deco" ref={imageRef} data-rellax-speed="4" />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title} ref={titleRef}>
          <span className={styles.title__line}>Because</span>
          <span className={`${styles.title__line} text--center`}>we met</span>
          <span className={`${styles.title__line} text--right`}>before</span>
        </h1>
        <div className={styles.body} ref={bodyRef}>
          <p className="text--light" >
            We believe in creating value behind your identity, a story that
            inspires the right people, something that stands out. A story that
            is not that similar to others. Find us exploring your golden circle
            and let us translate your image to an inclusive brandguide.
          </p>

          <Link className="hero__cta button" href="#more">
            More
          </Link>
        </div>
      </div>

      <div className={styles.navbar}>
        <nav className="navbar">
          <div className="hero__branding branding--text">
            <span>WMB</span>
            <span>Creative Studio</span>
          </div>

          <ul className="hero__nav nav">
            <Link className="nav__link" href="#services">
              Services
            </Link>
            <Link className="nav__link" href="about/index.html">
              About
            </Link>
            <Link className="nav__link" href="#work">
              Work
            </Link>
            <Link className="nav__link" href="contact">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
