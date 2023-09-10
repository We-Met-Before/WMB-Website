"use client";

import { gsap } from "gsap";
import Script from "next/script";
import { useEffect } from "react";
import { useExtLoaderContext } from "../../root/loader";


export default function ExternalScripts() {
  const [hasSplitText, setHasSplitText] = useExtLoaderContext();
  const [hasScrollSmooth, setHasScrollSmooth] = useExtLoaderContext();


  useEffect(() => {
    if (hasSplitText) {
      gsap.registerPlugin(SplitText);
    }

    if (hasScrollSmooth) {
      gsap.registerPlugin(ScrollSmoother);
    }
  }, [hasSplitText, hasScrollSmooth]);

  return (
    <>
      <Script src="/lib/SplitText.min.js" onLoad={() => setHasSplitText(true)} />
      <Script src="/lib/ScrollSmoother.min.js" onLoad={() => setHasScrollSmooth(true)} />
    </>
  );
}
