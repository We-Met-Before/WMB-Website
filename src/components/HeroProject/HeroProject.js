"use client";

import ExportedImage from "next-image-export-optimizer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Rellax from "rellax";
import { useProjectContext } from "../../root/project";
import styles from "./HeroProject.module.scss";

export default function HeroProject({ image, alt, inline }) {
  const [project, setProject] = useProjectContext();
  const [useImage, setUseImage] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    var rellax = Rellax(".rellax");

    return () => {
      rellax.destroy();
    };
  });

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
      {useImage && <ExportedImage src={useImage} fill={true} alt={"alt"} />}
      
    </header>
  );
}
