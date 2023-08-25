"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";


function AboutIntro() {
  useEffect(() => {
    var isMobile = false;
    gsap.set(".mbHead1", { y: isMobile ? "-60%" : "-75%" });
    gsap.set(".mbHead2", { y: isMobile ? "60%" : "75%" });

    // var charsMenu = menuText.chars;
    // var charsWelcome = welcomeText.chars; //an array of all the divs that wrap each character
    gsap.set(".mbNavMenu", { perspective: 100 });
    gsap.set(".mbWelcome", { perspective: 100 });
    var welcomeAnim = gsap.timeline({
      onStart: () => {
        // document.querySelector(".ScrollSmoother-wrapper").style.zIndex = -1;
      },
      onComplete: () => {
        document.body.style.overflowY = "scroll";
        gsap.to(".mbAstroid1", {
          x: "random(-50, 150)",
          y: "random(-50, 150)",
          rotation: "random(-45, 45)",
          ease: "power1.inOut",
          duration: 10,
          repeat: -1,
          repeatRefresh: true,
        });
        gsap.to(".mbAstroid2", {
          x: "random(-50, 150)",
          y: "random(-50, 150)",
          rotation: "random(-45, 45)",
          ease: "power1.inOut",
          duration: 10,
          repeat: -1,
          repeatRefresh: true,
        });
        gsap.to(".mbAstroid3", {
          x: "random(-50, 150)",
          y: "random(-50, 150)",
          rotation: "random(-45, 45)",
          ease: "power1.inOut",
          duration: 10,
          repeat: -1,
          repeatRefresh: true,
        });
        // document.querySelector(".ScrollSmoother-wrapper").style.zIndex = 1;
      },
    });
    welcomeAnim.from(".mbLogo", { width: 0, duration: 2 }, "-=0");
    welcomeAnim.to(".mbMenuLogo", { scale: 1, duration: 2 }, "-=2");
    // welcomeAnim.from(
    //   charsMenu,
    //   {
    //     opacity: 0,
    //     y: 30,
    //     transformOrigin: "bottom left",
    //     duration: 0.5,
    //     stagger: 0.05,
    //   },
    //   "-=0"
    // );
    welcomeAnim.from(
      ".mbHead1",
      { y: isMobile ? "-=50%" : "-=10%", duration: 2 },
      "-=2"
    );
    welcomeAnim.from(
      ".mbHead2",
      { y: isMobile ? "+=50%" : "+=10%", duration: 2 },
      "-=2"
    );
    welcomeAnim.from(".mbAstroid1", { right: "-18%", duration: 2 }, "-=2");
    welcomeAnim.from(".mbAstroid2", { left: "-18%", duration: 2 }, "-=2");
    // welcomeAnim.from(
    //   charsWelcome,
    //   {
    //     opacity: 0,
    //     y: isMobile ? 10 : 20,
    //     transformOrigin: "bottom left",
    //     duration: 0.5,
    //     stagger: 0.05,
    //   },
    //   "-=1"
    // );

    // gsap.set('.mbWelcomeDiscover', {opacity:0});
    gsap.set(".mbWelcomeTheIntro2", { opacity: 0 });
    // var introText = new SplitText(".mbWelcomeTheIntro1", {
    //   type: "words,chars",
    // });
    // var charsIntro = introText.chars;
    gsap.set(".mbWelcomeTheIntro1", { perspective: 100 });
    var mbHeroSt = gsap.timeline({
      defaults: {
        ease: "Power2.easeOut",
        duration: 1,
      },
      scrollTrigger: {
        start: "top 0%",
        end: "bottom -150%",
        trigger: ".mbIntro",
        pin: ".mbIntro",
        scrub: true,
        // markers: true,
      },
    });

    mbHeroSt.to(".rotateIntroHeads", { rotate: 50 }, "start");
    mbHeroSt.to(
      ".mbIntroAstroids",
      { alpha: 0, duration: 0.25, scale: 1.25 },
      "start"
    );
    mbHeroSt.to(".mbLogo", { opacity: 0, filter: "blur(10px)" }, "start");
    mbHeroSt.to(".mbCircle", { opacity: 1, duration: 1 }, "-=1");
    mbHeroSt.to(
      ".mbWelcomeTitle",
      { opacity: 0, y: "-=10%", duration: 0.1 },
      "-=1"
    );
    mbHeroSt.to(
      ".mbWelcomeText",
      { opacity: 0, y: "-=10%", duration: 0.1 },
      "-=1"
    );
    // mbHeroSt.to('.mbWelcomeDiscover',	{opacity:1,duration:0.2},'-=1')
    mbHeroSt.to(
      ".mbHead1",
      {
        y: isMobile ? "-17%" : "-30%",
        x: isMobile ? "8.5rem" : "5rem",
        rotation: isMobile ? -15 : -50,
      },
      "-=1"
    );
    mbHeroSt.to(
      ".mbHead2",
      {
        y: isMobile ? "17%" : "30%",
        x: isMobile ? "-8.5rem" : "-5rem",
        rotation: isMobile ? -15 : -50,
      },
      "-=1"
    );
    // mbHeroSt.from(
    //   charsIntro,
    //   {
    //     opacity: 0,
    //     scale: 0.8,
    //     transformOrigin: "bottom left",
    //     y: 10,
    //     duration: 0.2,
    //     stagger: 0.01,
    //   },
    //   "-=0.9"
    // );
    mbHeroSt.to(".rotateIntroHeads", { scale: 1.5 }, "-=0.5");
    mbHeroSt.to(".mbCircle", { scale: isMobile ? 4.5 : 6 }, "-=0.5");
    mbHeroSt.to(
      ".headsRotateContinu",
      { scale: 4, duration: 2, opacity: 0 },
      "-=0.75"
    );
    mbHeroSt.to(".mbWelcomeTheIntro1", { duration: 2, opacity: 0 }, "-=0");
    // mbHeroSt.to('.mbWelcomeDiscover',{duration: 1,opacity: 0,},'-=0')
  }, []);

  return (
    <section id="anchorIntro" className="mbIntro mbIntroBgPlaceholder">
      <div className="mbIntroBgContainer">
        <div className="rotateIntroHeads">
          <div className="headsRotateContinu">
            <Image
              className="mbHead mbHead1"
              src="images/hero_head_top.png"
              width={500}
              height={500}
              alt="Hero Head Image Top"
            />
            <Image
              className="mbHead mbHead2"
              src="images/hero_head_bottom.png"
              width={500}
              height={500}
              alt="Hero Head Image Bottom"
            />
          </div>
        </div>
        <div className="mbIntroAstroids">
          <Image
            className="mbAstroid mbAstroid1"
            src="images/mb_astroid1.png"
            width={500}
            height={500}
            alt="Hero Astroid Image"
          />
          <Image
            className="mbAstroid mbAstroid2"
            src="images/mb_astroid2.png"
            width={500}
            height={500}
            alt="Hero Astroid Image"
          />
          <Image
            className="mbAstroid mbAstroid3"
            src="images/mb_astroid3.png"
            width={500}
            height={500}
            alt="Hero Astroid Image"
          />
        </div>
      </div>
      <div className="introTextContainer">
        <div className="mbWelcome">
          <span className="mbWelcomeTitle">We Met Before</span>
          <h1 className="mbWelcomeText">Digital Design & Development Studio</h1>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
