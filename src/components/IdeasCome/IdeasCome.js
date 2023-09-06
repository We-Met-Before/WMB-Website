"use client";

import { gsap } from "gsap";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useExtLoaderContext } from "../../root/loader";
import styles from "./IdeasCome.module.scss";

export default function IdeasCome() {
  const titleRef = useRef(null);
  const bgRef = useRef(null);
  const imageOfRef = useRef(null);
  const wrapperRef = useRef(null);
  const [hasScrollTrigger] = useExtLoaderContext();

  useEffect(() => {
    const animation = {
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
      ease: "Power2.easeInOut",
    };
    const children = titleRef.current.children;

    gsap.set(children[0], { y: "0%", opacity: 1 });
    gsap.set(children[1], { y: "100%", opacity: 0 });

    gsap.to(children[1], { ...animation, y: "0%", opacity: 1 });
    gsap.to(children[0], { ...animation, y: "-100%", opacity: 0 });

    return () => {
      gsap.killTweensOf(children[0]);
      gsap.killTweensOf(children[1]);
    };
  }, [titleRef]);

  useEffect(() => {
    if (hasScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(bgRef.current, { y: "-5%" });

      const trigger = {
        trigger: wrapperRef.current,
        ease: "none",
      };

      // parallax the background
      gsap.to(bgRef.current, {
        y: "5%",
        scrollTrigger: {
          ...trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // light up the picture
      gsap.to(imageOfRef.current, {
        scrollTrigger: {
          ...trigger,
          start: "center center+=25%",
          toggleActions: "play complete reverse reverse",
        },
        duration: 0.2,
        opacity: 0,
      });

      return () => {
        if (imageOfRef.current) gsap.killTweensOf(imageOfRef.current);
        if (bgRef.current) gsap.killTweensOf(bgRef.current);
      };
    }
  }, [hasScrollTrigger]);

  return (
    <section className={styles.wrapper} ref={wrapperRef}>
      <div className="backdrop--media" ref={bgRef}>
        <ExportedImage src={"/images/WMB_MID_ON.png"} fill alt="" placeholder="" />
        <ExportedImage src={"/images/WMB_MID_OFF.png"} fill alt="" placeholder="" ref={imageOfRef} style={{ opacity: 1 }} />
      </div>

      <div className={styles.inner}>
        <div className="container text--center">
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
            <p className="article--description">
              If paths cross on the right moment you feel a source of euforic energy flowing through your body. Let us make sure your idea makes people feel the same way.
            </p>
            <Link href="#work" className="button">
              <span className="button__label">outcome</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
