"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./AboutUsCompact.module.scss";

export default function AboutUsCompact({ people }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    people.sort((a, b) => 0.5 - Math.random());
    people.slice(0, 2);
    const shuffle = people.sort((a, b) => 0.5 - Math.random());
    const slice = shuffle.slice(0, 3);
    setList(slice);
  }, [people]);

  return (
    <section>
      <div className="container">
        <Link className={styles.wrapper} href="/about">
          <ul className={styles.list}>
            {list.length > 0 &&
              list.map((person) => (
                <li className={styles.list__item} key={person.name}>
                  <ExportedImage
                    className={styles.list_img}
                    src={person.image}
                    width={60}
                    height={60}
                    alt={`Portrait of ${person.name}`}
                  />
                  <p>{person.name}</p>
                </li>
              ))}
          </ul>
          <p className="list--avatars__description text--light">
            Read <br /> about us +{people.length};
          </p>
        </Link>
      </div>
    </section>
  );
}
