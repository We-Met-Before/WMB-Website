"use client";

import { useEffect, useState } from "react";
import { useProjectContext } from "../../root/project";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./HeroProject.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

export default function HeroProject({ image, alt, inline }) {
  const [project, setProject] = useProjectContext();
  const [useImage, setUseImage] = useState(null);
  const pathname = usePathname();

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
      className={cn(styles.hero, {
        inactive: useImage === null,
        inline: inline,
      })}
    >
      {useImage && <Image src={useImage} width={200} height={200} alt={"alt"} />}
    </header>
  );
}
