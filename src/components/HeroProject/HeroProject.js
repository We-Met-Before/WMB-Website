"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useProjectContext } from "../../root/project";
import styles from "./HeroProject.module.scss";

export default function HeroProject({ image, alt, transitioning, innerRef }) {
  const [project, setProject] = useProjectContext();

  useEffect(() => {
    console.log("project is???");
    console.log(project);
  }, [project]);

  if (image) {
    return (
      <header ref={innerRef} className={styles.hero}>
        <Image src={image} width={200} height={200} alt={alt} />
      </header>
    );
  } else if (project?.image) {
    <header ref={innerRef} className={`${styles.hero} ${styles.transitioning}`}>
      <Image src={image} width={200} height={200} alt={alt} />
    </header>;
  } else {
    <header ref={innerRef} className={`${styles.hero} ${styles.transitioning}`}>
      <Image src={"/images/projects/de-bestuurskamer-new.jpg"} width={200} height={200} alt={alt} />
    </header>;
  }
}
