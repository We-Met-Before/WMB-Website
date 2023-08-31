"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import image_off from "public/images/WMB_MID_OFF.png";
import image_on from "public/images/WMB_MID_ON.png";
import { useEffect, useRef, useState } from "react";
import styles from "./IdeasCome.module.scss";

export default function IdeasCome() {
  const titleRef = useRef(null);
  const bgRef = useRef(null);
  const imageOfRef = useRef(null);
  const wrapperRef = useRef(null);
  const [hasScrollTrigger, setHasScrollTrigger] = useState(false);

  useEffect(() => {
    gsap.set(titleRef.current.children, {
      opacity: 0,
    });

    const animOptions = {
      opacity: 1,
      duration: 1,
      repeat: 1,
      repeatDelay: 2,
      yoyo: true,
    };

    gsap
      .timeline({
        repeat: -1,
      })
      .to(titleRef.current.children[0], animOptions)
      .to(titleRef.current.children[1], animOptions);
  }, [titleRef]);

  useEffect(() => {
    if (hasScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(bgRef.current, { y: "-5%" });

      // parallax the background
      gsap.to(bgRef.current, {
        y: "5%",
        scrollTrigger: {
          trigger: wrapperRef.current,
          ease: "none",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // light up the picture
      gsap.to(imageOfRef.current, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          ease: "none",
          start: "center center+=25%",
          end: "bottom bottom"
        },
        opacity: 0,
      });
    }
  }, [hasScrollTrigger]);
  
  return (
    <section className={styles.wrapper} ref={wrapperRef}>
      <Script
        src="/about/packages/ScrollTrigger.min.js"
        onLoad={() => setHasScrollTrigger(true)}
      />

      <div className={styles.bg} ref={bgRef}>
        <Image src={image_on} alt="" />
        <Image src={image_off} alt="" ref={imageOfRef} style={{opacity: 1}} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className="text--line">Where</span>
            <span className="text--line">
              <span className={styles.alternating} ref={titleRef}>
                <span className={styles.alternating__first}>ideas</span>
                <span className={styles.alternating__second}>we</span>
              </span>
              come
            </span>
            <span className="text--line">together.</span>
          </h1>
          <p>
            If paths cross on the right moment you feel a source of euforic
            energy flowing through your body. Let us make sure your idea makes
            people feel the same way.
          </p>
          <Link href="#work" className="button">
            outcome
          </Link>
        </div>
      </div>
    </section>
  );
}
