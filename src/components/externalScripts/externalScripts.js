"use client";

import { gsap } from "gsap";
import Script from "next/script";
import { useEffect } from "react";
import { useExtLoaderContext } from "../../root/loader";

export default function ExternalScripts({ image, alt, inline }) {
  const [hasScrollTrigger, setHasScrollTrigger] = useExtLoaderContext();
  const [hasSplitText, setHasSplitText] = useExtLoaderContext();
  const [hasScrollSmooth, setHasScrollSmooth] = useExtLoaderContext();

  useEffect(() => {
    if (hasScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (hasSplitText) {
      gsap.registerPlugin(SplitText);
    }

    if (hasScrollSmooth) {
      gsap.registerPlugin(ScrollSmoother);
    }
  }, [hasScrollTrigger, hasSplitText, hasScrollSmooth]);

  return (
    <>
      <Script
        src="/about/packages/ScrollTrigger.min.js"
        onLoad={() => setHasScrollTrigger(true)}
      />
      <Script
        src="/about/packages/SplitText.min.js"
        onLoad={() => setHasSplitText(true)}
      />
      <Script
        src="/about/packages/ScrollSmoother.min.js"
        onLoad={() => setHasScrollSmooth(true)}
      />
    </>
  );
}
