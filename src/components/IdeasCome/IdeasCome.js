"use client";

import { gsap } from "gsap";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useExtLoaderContext } from "../../root/loader";
import styles from "./IdeasCome.module.scss";
import { ScrollTrigger } from "gsap/all";

export default function IdeasCome() {
  const titleRef = useRef([]);
  const bgRef = useRef(null);
  const imageOfRef = useRef(null);
  const wrapperRef = useRef(null);
  const [hasSplitText] = useExtLoaderContext(false);
  const cursorRef = useRef(null);

  useEffect(() => {
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
  }, [bgRef, imageOfRef]);

  useEffect(() => {
    if (titleRef.current && hasSplitText) {
      gsap.registerPlugin(SplitText);

      var tl = gsap.timeline({
        repeat: -1,
      });

      const chars0 = new SplitText(titleRef.current[0], {
        type: "words,chars",
      }).chars;

      const chars1 = new SplitText(titleRef.current[1], {
        type: "words,chars",
      }).chars;

      gsap.set(chars0, { display: "none" });
      gsap.set(chars1, { display: "none" });

      tl.to(chars0, {
        display: "inline-block",
        stagger: 0.1,
      });

      gsap.to(cursorRef.current, {
        backgroundColor: "rgba(255,255,255,0.75)",
        repeat: -1,
      });

      tl.to(chars0, {
        display: "none",
        stagger: 0.1,
      });

      tl.to(chars1, {
        display: "inline-block",
        stagger: 0.1,
      });

      tl.to(chars1, {
        display: "none",
        stagger: 0.1,
      });

      return () => {
        tl.kill();
      };
    }
  }, [hasSplitText]);
  return (
    <section className={styles.wrapper} ref={wrapperRef}>
      <div className="backdrop--media" ref={bgRef}>
        <ExportedImage src={"/images/WMB_MID_ON.png"} fill alt="" placeholder="empty" />
        <ExportedImage src={"/images/WMB_MID_OFF.png"} fill alt="" placeholder="empty" ref={imageOfRef} style={{ opacity: 1 }} />
      </div>

      <div className={styles.inner}>
        <div className="container text--center">
          <div className="backdrop--gradient" style={{ transform: "translate3d(-20%, -50%, 0) scale(1.2)" }}></div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span className="text--line">Where</span>
              <span className="text--line flex">
                <span className={styles.alternating}>
                  <span ref={(el) => (titleRef.current[0] = el)} className={styles.alternating__first}>
                    ideas
                  </span>

                  <span ref={(el) => (titleRef.current[1] = el)} className={styles.alternating__second}>
                    we
                  </span>

                  <span className={styles.cursor} ref={cursorRef}></span>
                </span>
                <span>come</span>
              </span>
              <span className="text--line">together.</span>
            </h1>
            <p className="article--description d--none--sm">
              If paths cross on the right moment you feel a source of euforic energy flowing through your body. Let us make sure your idea makes people feel the same way.
            </p>
            <div className="d--none--sm">
              <Link href="#work" className="button">
                <span className="button__label">outcome</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
