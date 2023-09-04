"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import image_off from "public/images/WMB_MID_OFF.png";
import image_on from "public/images/WMB_MID_ON.png";
import { useEffect, useRef } from "react";
import { useExtLoaderContext } from "../../root/loader";
import styles from "./IdeasCome.module.scss";

export default function IdeasCome() {
  const titleRef = useRef(null);
  const bgRef = useRef(null);
  const imageOfRef = useRef(null);
  const wrapperRef = useRef(null);
  const [hasScrollTrigger, setHasScrollTrigger] = useExtLoaderContext();

  useEffect(() => {
    const animation = {
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
      ease: "Power2.easeInOut",
    };

    gsap.set(titleRef.current.children[0], {
      y: "0%",
      opacity: 1,
    });

    gsap.set(titleRef.current.children[1], {
      y: "100%",
      opacity: 0,
    });

    gsap.to(titleRef.current.children[1], {
      ...animation,
      y: "0%",
      opacity: 1,
    });

    gsap.to(titleRef.current.children[0], {
      ...animation,
      y: "-100%",
      opacity: 0,
    });
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
          toggleActions: "play complete reverse reverse",
        },
        duration: 0.2,
        opacity: 0,
      });
    }
  }, [hasScrollTrigger]);

  return (
    <section className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.bg} ref={bgRef}>
        <Image src={image_on} alt="" />
        <Image src={image_off} alt="" ref={imageOfRef} style={{ opacity: 1 }} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className="text--line">Where</span>
            <span className="text--line flex">
              <span className={styles.alternating} ref={titleRef}>
                <span className={styles.alternating__first}>ideas</span>
                <span className={styles.alternating__second}>we</span>
              </span>
              <span>come</span>
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
