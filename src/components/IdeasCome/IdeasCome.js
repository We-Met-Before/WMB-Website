"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import IdeasBGImage from "public/images/ideas__background.png";
import { useEffect, useRef } from "react";
import styles from "./IdeasCome.module.scss";

export default function IdeasCome() {
  const alternatingRef = useRef(null);

  useEffect(() => {
    if (alternatingRef.current) {
      gsap.set(alternatingRef.current.children, {
        opacity: 0,
      });

      let time = 1;
      const animOptions = {
        opacity: 1,
        duration: time,
        repeat: 1,
        repeatDelay: time * 2,
        yoyo: true,
      };

      var tl = gsap.timeline({
        repeat: -1,
      });

      tl.to(alternatingRef.current.children[0], animOptions);
      tl.to(alternatingRef.current.children[1], animOptions);
    }
  });
  return (
    <section className={styles.wrapper}>
      <div className={styles.bg}>
        <Image src={IdeasBGImage} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className="line">Where</span>
            <span className="line">
              <span className={styles.alternating} ref={alternatingRef}>
                <span className={styles.alternating__first}>ideas</span>
                <span className={styles.alternating__second}>we</span>
              </span>
              come
            </span>
            <span className="line">together.</span>
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
