"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useExtLoaderContext } from "../../root/loader";
import Video from "../videoComplete/Video";
import styles from "./Services.module.scss";

export default function Services({ items }) {
  const [active, setActive] = useState(0);
  const [hasScrollTrigger] = useExtLoaderContext();
  const astroidWrapRef = useRef();
  const astroidRefs = useRef([]);
  const videoRefs = useRef([]);
  const skillsRefs = useRef([]);
  const skillsWrapRefs = useRef([]);

  // scroll videos on enter view
  useEffect(() => {
    if (hasScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      videoRefs.current.forEach((video) => {
        gsap.to(video, {
          scrollTrigger: {
            trigger: video,
            start: "top center+=25%",
            onEnter: () => video.play(),
          },
        });
      });
    }

    return () => {
      videoRefs.current.forEach((video) => {
        gsap.killTweensOf(video);
      });
    };
  }, [hasScrollTrigger, videoRefs]);

  const onClickVisual = (index) => {
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0;
    videoRefs.current[index].play();
  };

  // animate icons in/out on state change
  useEffect(() => {
    if (skillsWrapRefs.current.length == items.length) {
      let inactive = skillsWrapRefs.current;
      let sub = inactive.splice(active, 1);

      gsap.to(inactive, {
        y: -30,
        rotation: "random([-10,10])",
        opacity: 0,
        ease: "ease-in-out",
        duration: 0.2,
      });
      gsap.to(sub, {
        y: 0,
        opacity: 1,
        rotation: 0,
        ease: "ease-in-out",
        duration: 0.5,
      });
    }

    return () => {
      skillsWrapRefs.current.forEach((item) => {
        gsap.killTweensOf(item);
      });
    };
  }, [skillsWrapRefs, active]);

  // float the refs in space
  useEffect(() => {
    if (skillsRefs.current) {
      const btwn = (min, max) => {
        return Math.floor(Math.random() * max) + min;
      };

      gsap.to(skillsRefs.current, {
        duration: 8,
        y: `random([-=${btwn(-20, 20)}, -=${btwn(-20, 20)}, -=${btwn(-20, -80)}, -=${btwn(-10, 40)}])`,
        x: `random([-=${btwn(-20, 20)}, -=${btwn(-20, 20)}, -=${btwn(-20, -80)}, -=${btwn(30, 25)}])`,
        rotation: 20,
        repeat: -1,
        yoyo: true,
        ease: "linear",
      });
    }
    return () => {
      gsap.killTweensOf(skillsRefs);
    };
  }, [skillsRefs]);

  useEffect(() => {
    const duration = 8;

    gsap.to(astroidWrapRef.current, {
      rotation: -20,
      ease: "linear",
      repeat: -1,
      duration: duration,
      yoyo: true,
      ease: "Power1.easeInOut",
    });
    gsap.from(astroidRefs.current, {
      rotation: -20,
      ease: "linear",
      repeat: -1,
      duration: duration,
      stagger: false,
      yoyo: true,
      ease: "Power1.easeInOut",
    });

    return () => {
      gsap.killTweensOf(astroidWrapRef.current);
      gsap.killTweensOf(astroidRefs.current);
    };
  }, [astroidWrapRef, astroidRefs]);

  return (
    <section className="section--center" id="services">
      <div className="container--offset">
        <h1 className={styles.title}>Services</h1>
      </div>

      <div className="container">
        <div className="flex--container">
          <div className="col">
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li className={`${styles.collapsable} ${active == index && styles["collapsable--active"]}`} key={index} onClick={() => setActive(index)}>
                  <h4>{item.title}</h4>
                  <article className={styles.collapsable__content} dangerouslySetInnerHTML={{ __html: item.content }}></article>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.visual} col d--none--sm`}>
            <div className={styles.tags}>
              {items.map((item, i) => (
                <span
                  style={{ display: "block", opacity: 0 }}
                  key={i}
                  ref={(element) => {
                    skillsWrapRefs.current[i] = element;
                  }}
                >
                  {item.skills.map((skill, j) => (
                    <img
                      src={`/icons/icon_${skill}.png`}
                      alt={skill}
                      key={j}
                      className={`${styles.tags__icon}`}
                      ref={(element) => {
                        skillsRefs.current.push(element);
                      }}
                    />
                  ))}
                </span>
              ))}
            </div>
            <ul className={styles["list__visuals"]} ref={astroidWrapRef}>
              {items.map(
                (item, i) =>
                  item.visual && (
                    <li key={i} className={styles.listitem} onClick={() => onClickVisual(i)}>
                      <div
                        className={styles.astroid}
                        ref={(element) => {
                          astroidRefs.current[i] = element;
                        }}
                      >
                        <Video
                          src={`/videos/${item.visual}`}
                          loop={false}
                          autoPlay={false}
                          ref={(element) => {
                            videoRefs.current[i] = element;
                          }}
                        />
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
