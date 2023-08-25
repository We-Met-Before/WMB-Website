"use client";

import { gsap } from "gsap";
import React, { useState, useEffect } from "react";

function SplashScreen() {
  useEffect(() => {
    gsap.to(".splash-screen", {
      duration: 2,
      opacity: 0,
      onComplete: function () {
        document.querySelector(".splash-screen").style.display = "none";
      },
    });
  }, []);

  return <div className="splash-screen"></div>;
}

export default SplashScreen;
