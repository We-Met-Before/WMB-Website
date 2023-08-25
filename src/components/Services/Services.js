"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.scss";
import React from "react";

export default function Services() {
  const [collaps, setCollaps] = React.useState(0);

  return (
    <section className="container">
      <h1 className={styles.title}>Services</h1>
      <div className="flex--container">
        <div className="col">
          <ul className={styles.list}>
            <li className={styles.collapsable} onClick={() => setCollaps(0)}>
              <h4>Brand Identity</h4>
              {collaps == 0 && (
                <p className={styles.collapsable__content}>
                  We believe in creating value behind your identity, a story
                  that inspires the right people, something that stands out. A
                  story that is not that similar to others. Find us exploring
                  your golden circle and let us translate your image to an
                  inclusive brandguide.
                </p>
              )}
            </li>
            <li className={styles.collapsable} onClick={() => setCollaps(1)}>
              <h4>Brand Identity</h4>
              {collaps == 1 && (
                <p className={styles.collapsable__content}>
                  We believe in creating value behind your identity, a story
                  that inspires the right people, something that stands out. A
                  story that is not that similar to others. Find us exploring
                  your golden circle and let us translate your image to an
                  inclusive brandguide.
                </p>
              )}
            </li>
            <li className={styles.collapsable} onClick={() => setCollaps(2)}>
              <h4>Brand Identity</h4>
              {collaps == 2 && (
                <p className={styles.collapsable__content}>
                  We believe in creating value behind your identity, a story
                  that inspires the right people, something that stands out. A
                  story that is not that similar to others. Find us exploring
                  your golden circle and let us translate your image to an
                  inclusive brandguide.
                </p>
              )}
            </li>
            <li className={styles.collapsable} onClick={() => setCollaps(3)}>
              <h4>Brand Identity</h4>
              {collaps == 3 && (
                <p className={styles.collapsable__content}>
                  We believe in creating value behind your identity, a story
                  that inspires the right people, something that stands out. A
                  story that is not that similar to others. Find us exploring
                  your golden circle and let us translate your image to an
                  inclusive brandguide.
                </p>
              )}
            </li>
          </ul>
        </div>
        <div className="col">hier komt een visual</div>
      </div>
    </section>
  );
}
