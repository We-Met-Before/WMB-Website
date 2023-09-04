"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useProjectContext } from "../../root/project";
import styles from "./HeroProject.module.scss";

import { usePathname } from "next/navigation";
import ExternalScripts from "../externalScripts/externalScripts";

export default function HeroProject({ image, alt, inline }) {
  const [project, setProject] = useProjectContext();
  const [useImage, setUseImage] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes(project.id)) {
      console.log("set project to false");
      console.log(project.id);
      console.log(pathname);
      setProject(false);
    }
  }, [pathname]);

  useEffect(() => {
    console.log({project})
    if (project) {
      setUseImage(project.image);
    } else if (image) {
      setUseImage(image);
    } else {
      setUseImage(null);
    }
  }, [project, image]);
  return (
    <header
      id="top-header"
      className={`${styles.hero} ${useImage == null ? styles.inactive : ""} ${
        inline ? styles.inline : ""
      }`}
    >
      {useImage && <Image src={useImage} width={200} height={200} alt={"alt"} />}
      <ExternalScripts />
      
    </header>
  );
}
