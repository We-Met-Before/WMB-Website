"use client";

import { useEffect, useState } from "react";
import { useProjectContext } from "../../root/project";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./HeroProject.module.scss";
import classNames from "classnames";
import Rellax from "rellax";

const cn = classNames.bind(styles);

export default function HeroProject({ image, alt, inline }) {
  const [project, setProject] = useProjectContext();
  const [useImage, setUseImage] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    var rellax = Rellax(".rellax");

    return () => {
      rellax.destroy();
    };
  }, [Rellax]);

  useEffect(() => {
    if (!pathname.includes(project?.id)) {
      setProject(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (project) {
      setUseImage(project.image);
    } else {
      setUseImage(image || null);
    }
  }, [project, image]);
  return (
    <header
      id="top-header"
      className={` ${styles.hero} rellax ${useImage === null ? styles.inactive : ""} ${inline ? styles.inline : ""}`}
      data-rellax-speed="2"
    >
      {useImage && <Image src={useImage} width={200} height={200} alt={"alt"} />}
    </header>
  );
}
