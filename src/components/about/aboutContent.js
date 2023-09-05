"use client";

import { Splide } from "@splidejs/splide";
import { gsap } from "gsap";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import Portfolio from "./portfolio";

function AboutContent({portfolioItems}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [hasScrollSmoother, setHasScrollSmoother] = useState(false);
  const [hasScrollTrigger, setHasScrollTrigger] = useState(false);
  const [hasSplitText, setHasSplitText] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  let smoother;
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    setIsSafari(
      navigator.vendor.match(/apple/i) &&
        !navigator.userAgent.match(/crios/i) &&
        !navigator.userAgent.match(/fxios/i) &&
        !navigator.userAgent.match(/Opera|OPT\//)
    );
  }, []);

  useEffect(() => {
    if (!hasScrollSmoother || !hasScrollTrigger || !hasSplitText) return;
    console.log("trigger all timeline functiones");

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    // create the smooth scroller FIRST!
    window.smoother = ScrollSmoother.create({
      smooth: 1, // seconds it takes to "catch up" to native scroll position
      smoothTouch: 0.25,
      effects: false, // look for data-speed and data-lag attributes on elements and animate accordingly
      content: "#smooth-content",
    });

    console.log("created smoother");
    console.log(smoother);

    gsap.to(".splash-screen", {
      duration: 2,
      opacity: 0,
      onComplete: () => {
        setShowSplash(false);
      },
    });

    // JSItro.js
    gsap.set(".mbHead1", { y: isMobile ? "-60%" : "-75%" });
    gsap.set(".mbHead2", { y: isMobile ? "60%" : "75%" });
    var menuText = new SplitText(".mbNavMenu", { type: "words,chars" });
    var welcomeText = new SplitText(".mbWelcome", { type: "words,chars" });
    var charsMenu = menuText.chars;
    var charsWelcome = welcomeText.chars; //an array of all the divs that wrap each character
    gsap.set(".mbNavMenu", { perspective: 100 });
    gsap.set(".mbWelcome", { perspective: 100 });
    var welcomeAnim = gsap.timeline({
      onStart: () => {
        document.querySelector(".ScrollSmoother-wrapper").style.zIndex = -1;
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
        document.querySelector(".ScrollSmoother-wrapper").style.zIndex = 1;
      },
    });
    welcomeAnim.from(".mbLogo", { width: 0, duration: 2 }, "-=0");
    welcomeAnim.to(".mbMenuLogo", { scale: 1, duration: 2 }, "-=2");
    welcomeAnim.from(
      charsMenu,
      {
        opacity: 0,
        y: 30,
        transformOrigin: "bottom left",
        duration: 0.5,
        stagger: 0.05,
      },
      "-=0"
    );
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
    welcomeAnim.from(
      charsWelcome,
      {
        opacity: 0,
        y: isMobile ? 10 : 20,
        transformOrigin: "bottom left",
        duration: 0.5,
        stagger: 0.05,
      },
      "-=1"
    );
    gsap.set(".mbWelcomeTheIntro2", { opacity: 0 });
    var introText = new SplitText(".mbWelcomeTheIntro1", {
      type: "words,chars",
    });
    var charsIntro = introText.chars;
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
    mbHeroSt.from(
      charsIntro,
      {
        opacity: 0,
        scale: 0.8,
        transformOrigin: "bottom left",
        y: 10,
        duration: 0.2,
        stagger: 0.01,
      },
      "-=0.9"
    );
    mbHeroSt.to(".rotateIntroHeads", { scale: 1.5 }, "-=0.5");
    mbHeroSt.to(".mbCircle", { scale: isMobile ? 4.5 : 6 }, "-=0.5");
    mbHeroSt.to(
      ".headsRotateContinu",
      { scale: 4, duration: 2, opacity: 0 },
      "-=0.75"
    );
    mbHeroSt.to(".mbWelcomeTheIntro1", { duration: 2, opacity: 0 }, "-=0");

    // jsService.js
    let servicesCx = {
      wrapper: document.querySelector(".mbServicesContainerWrapper"),
      title: document.querySelector(".mbServicesIntro_h2"),
      astroidsWrapper: document.querySelector(".mbServicesContainerIntro"),
      astroids: document.querySelectorAll(".mbServicesIntro_Asteroid"),
      content: document.querySelector(".mbServicesContainer"),
    };
    if (!isMobile) {
      gsap.set(servicesCx.astroidsWrapper, {
        scale: 2,
        transformOrigin: "center",
        filter: "blur(50px)",
      });
      let serviceTl = gsap.timeline({
        defaults: {
          duration: 2,
          ease: "Power1.easeOut",
        },
        scrollTrigger: {
          trigger: servicesCx.wrapper,
          start: "top top",
          bottom: "bottom bottom",
          scrub: true,
          pin: true,
        },
      });
      serviceTl.to(
        servicesCx.astroidsWrapper,
        {
          scale: 1.0,
          filter: "blur(0px)",
          duration: 0.25,
        },
        "start"
      );
    }

    let thumbnails = new Splide("#thumbnail-carousel", {
      perPage: 1,
      padding: "6.5rem",
      focus: "center",
      type: "loop",
      gap: "2.5rem",
      pagination: false,
      arrows: false,
      isNavigation: true,
      start: 1,
    });
    let main = new Splide("#main-carousel", {
      type: "fade",
      focus: "center",
      pagination: false,
      arrows: false,
      start: 1,
    });
    const carouselList = ["Branding", "Design", "Development"];
    main.on("move", function (e) {
      switchService(carouselList[e]);
    });
    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    gsap.set(".mbContactHeadsWrapper", {
      scale: 1.5,
      transformOrigin: "center",
    });
    gsap.set(".mbFooterHead1", {
      yPercent: -100,
      xPercent: -25,
      autoAlpha: 0,
      rotate: 15,
    });
    gsap.set(".mbFooterHead2", {
      yPercent: 100,
      xPercent: 25,
      autoAlpha: 0,
      rotate: -15,
    });
    gsap.set(".mbFooterBoll", {
      scale: 0,
      alpha: 0,
      transformOrigin: "center",
    });
    ScrollTrigger.create({
      trigger: ".mbContactHeadsWrapper",
      start: "top 10%",
      end: "+=90%",
      once: true,
      onEnter: () => {
        let contactTl = gsap.timeline();
        contactTl.to(
          ".mbContactHeadsWrapper",
          { scale: 1, transformOrigin: "center", duration: 2 },
          "-=0"
        );
        contactTl.to(
          ".mbFooterHead1",
          {
            yPercent: -50,
            xPercent: 0,
            rotation: -15,
            autoAlpha: 1,
            duration: 2,
          },
          "-=2"
        );
        contactTl.to(
          ".mbFooterHead2",
          {
            yPercent: 50,
            xPercent: 0,
            rotation: -15,
            autoAlpha: 1,
            duration: 2,
          },
          "-=2"
        );
        contactTl.to(
          ".mbFooterBoll",
          { scale: 1, alpha: 1, transformOrigin: "center", duration: 0.5 },
          "-=0.5"
        );
        gsap.to(".mbContactHeadsWrapper", {
          rotate: -360,
          transformOrigin: "center",
          repeat: -1,
          ease: "power0",
          duration: 30,
        });
      },
      onLeave: () => {
        let contactTl = gsap.timeline();
        contactTl.to(
          ".mbContactHeadsWrapper",
          { scale: 1, transformOrigin: "center", duration: 2 },
          "-=0"
        );
        contactTl.to(
          ".mbFooterHead1",
          {
            yPercent: -50,
            xPercent: 0,
            rotation: -15,
            autoAlpha: 1,
            duration: 1.5,
          },
          "-=2"
        );
        contactTl.to(
          ".mbFooterHead2",
          {
            yPercent: 50,
            xPercent: 0,
            rotation: -15,
            autoAlpha: 1,
            duration: 1.5,
          },
          "-=2"
        );
        contactTl.to(
          ".mbFooterBoll",
          { scale: 1, alpha: 1, transformOrigin: "center", duration: 0.25 },
          "-=0.5"
        );
        gsap.to(".mbContactHeadsWrapper", {
          rotate: -360,
          transformOrigin: "center",
          repeat: -1,
          ease: "power0",
          duration: 30,
        });
      },
    });
    var serviceTitle = gsap.timeline({
      defaults: {
        ease: "Power2.easeOut",
        duration: 1,
      },
      scrollTrigger: {
        trigger: ".footer_container",
        start: "top 60%",
        end: "bottom 90%",
        //markers:true,
        scrub: true,
      },
    });
    serviceTitle.to(
      ".mbServicesIntro_h2Container",
      { opacity: 0, duration: 1 },
      "-=0"
    );
    serviceTitle.to(
      ".mbServicesContainerIntro",
      { opacity: 0, duration: 1 },
      "-=1"
    );

    // jsServiceModule.js

    function startjsServiceModule() {
      randomFloatServiceIcon();
      // switchService('Branding');
    }

    // default set

    gsap.set([".mbServiceContent", ".mbServiceIcon"], {
      display: "none",
    });

    gsap.set(".mbServiceClick", {
      opacity: 0.25,
    });

    // default set //re-enable branding content & icons

    gsap.set(["#mbBrandingContent", ".mbServiceIconBranding"], {
      display: "block",
    });
    gsap.set("#mbBrandingClick", {
      opacity: 1,
      // fontWeight: 600,
    });

    // onClick op de desbetreffende service (zie parameter) worden de alle servies eerst uitgetweend, (vervolgens op display:none ge-set)
    // naderhand wordt de getriggerde (parameter) class/id aangeroepen en display: block geset en naar opacity 1 getweend

    function switchService(serviceIdName) {
      gsap.to(".mbServiceContent", {
        opacity: 0,
        duration: 0.5,
        onComplete: function () {
          gsap.set(".mbServiceContent", {
            display: "none",
          });
        },
      });

      gsap.set("#mb" + serviceIdName + "Content", {
        delay: 0.5,
        display: "block",
        onComplete: function () {
          gsap.to("#mb" + serviceIdName + "Content", {
            opacity: 1,
          });
        },
      });

      gsap.to(".mbServiceIcon", {
        opacity: 0,
        duration: 0.5,
        onComplete: function () {
          gsap.set(".mbServiceIcon", {
            display: "none",
          });
        },
      });

      gsap.set(".mbServiceIcon" + serviceIdName, {
        delay: 0.5,
        display: "block",
        onComplete: function () {
          gsap.to(".mbServiceIcon" + serviceIdName, {
            opacity: 1,
          });
        },
      });

      gsap.to(".mbServiceClick", {
        opacity: 0.2,
      });
      // gsap.set('.mbServiceClick', {
      //     fontWeight: 300,
      // })

      gsap.to("#mb" + serviceIdName + "Click", {
        delay: 0.5,
        opacity: 1,
      });
      gsap.set("#mb" + serviceIdName + "Click", {
        // fontWeight: 600,
        delay: 0.5,
      });
    }

    var mbServiceIconClass;
    var floatVariation;

    // De volgende functie wordt continue geloopt, in deze functie worden de service icons (allemaal), een willekeurig aantal getweend, (x, y as en rotatie verschillend)
    // Er zijn 4 variaties van floats, (horizontale variatie, verticale variatie)
    // Binnen deze 4 variaties zijn alle getallen nog random, zo zijn er dus oneindig veel combinaties maar wel vaste patronen en consistenties

    function randomFloatServiceIcon() {
      mbServiceIconClass = document.getElementsByClassName("mbServiceIcon");

      for (let i = 0; i < mbServiceIconClass.length; i++) {
        floatVariation = Math.floor(Math.random() * 4);

        if (floatVariation == 0) {
          gsap.to("#" + mbServiceIconClass[i].id, {
            duration: 3,
            x: 5 + Math.floor(Math.random() * 20),
            y: 3 + Math.floor(Math.random() * 10),
            rotation: 2,
            ease: Power1.easeInOut,
          });
          gsap.to("#" + mbServiceIconClass[i].id, {
            delay: 3,
            duration: 3,
            x: -5 - Math.floor(Math.random() * 20),
            y: -3 - Math.floor(Math.random() * 10),
            ease: Power1.easeInOut,
            rotation: -2,
          });
        }
        if (floatVariation == 1) {
          gsap.to("#" + mbServiceIconClass[i].id, {
            duration: 3,
            x: -5 - Math.floor(Math.random() * 20),
            y: 3 + Math.floor(Math.random() * 10),
            ease: Power1.easeInOut,
            rotation: -4,
          });
          gsap.to("#" + mbServiceIconClass[i].id, {
            delay: 3,
            duration: 3,
            x: 5 + Math.floor(Math.random() * 20),
            y: -3 - Math.floor(Math.random() * 10),
            ease: Power1.easeInOut,
            rotation: 4,
          });
        }
        if (floatVariation == 2) {
          gsap.to("#" + mbServiceIconClass[i].id, {
            duration: 3,
            x: 10 + Math.floor(Math.random() * 20),
            y: -5 - Math.floor(Math.random() * 10),
            ease: Power1.easeInOut,
            rotation: 8,
          });
          gsap.to("#" + mbServiceIconClass[i].id, {
            delay: 3,
            duration: 3,
            x: -10 - Math.floor(Math.random() * 20),
            y: 5 + Math.floor(Math.random() * 10),
            ease: Power1.easeInOut,
            rotation: -4,
          });
        }
        if (floatVariation == 3) {
          gsap.to("#" + mbServiceIconClass[i].id, {
            duration: 3,
            x: -10 - Math.floor(Math.random() * 20),
            y: -5 - Math.floor(Math.random() * 10),
            ease: Power1.easeInOut,
            rotation: -8,
          });
          gsap.to("#" + mbServiceIconClass[i].id, {
            delay: 3,
            duration: 3,
            x: 10 + Math.floor(Math.random() * 20),
            y: 5 + Math.floor(Math.random() * 10),
            ease: Power1.easeInOut,
            rotation: 4,
          });
        }
      }

      setTimeout(randomFloatServiceIcon, 6000);
    }

    gsap.set(".mbStoryCirBor", {
      autoAlpha: 0.0,
    });
    function storyMobileAnimation() {
      gsap.set(".mbStoryCirBor", {
        scale: 2,
      });
      gsap.set(".mbStoryItem", {
        opacity: 0,
        yPercent: 25,
      });
      var storyAniMobile = gsap.timeline({
        defaults: {
          ease: "Power2.ease",
          duration: 1,
        },
        onComplete() {
          console.log("timeline completed");
        },
        scrollTrigger: {
          start: "-100% 100%",
          end: "80% 10%",
          scrub: true,
          pin: ".mbStory",
        },
      });
      storyAniMobile
        .to(".mbStoryCirBor", {
          scale: 1,
        })
        .to([".mbStoryItem"], {
          yPercent: 0,
          opacity: 1,
        })
        .to(".mbStoryCirBor1", {
          marginLeft: "50%",
          duration: 2,
          autoAlpha: 0.2,
        })
        .to(
          ".mbStoryCirBor2",
          {
            marginRight: "50%",
            duration: 2,
            autoAlpha: 0.2,
          },
          "-=2"
        )
        .to(
          ".mbWelcomeTheIntro2",
          {
            opacity: 1,
          },
          "-=1.5"
        )
        .to(".upperCircleRotateContainer", {
          scale: 5,
          autoAlpha: 0,
        })
        .to(
          ".circleBlackBlur",
          {
            width: "20rem",
            height: "20rem",
            opacity: 1,
            duration: 1.9,
          },
          "-=1"
        )
        .to(
          ".mbRotateLogoCirlce",
          {
            scale: 2,
            opacity: 0,
          },
          "-=1.5"
        )
        .to(
          ".mbStoryCirBor",
          {
            scale: 2.5,
          },
          "-=1.5"
        )
        .to(
          ".mbStoryCirBor",
          {
            autoAlpha: 0,
          },
          "-=2.5"
        )
        .to(
          [".mbStoryTextYou", ".mbStoryTextUs"],
          {
            opacity: 0,
          },
          "-=1.5"
        );
    }
    function storyDesktopAnimation() {
      gsap.set(".mbStoryCirBor", {
        scale: 1.5,
        autoAlpha: 0.0,
      });
      gsap.set(".mbStoryItem", {
        opacity: 0,
      });
      gsap.set(".mbStoryCirBor1", {
        marginLeft: "40%",
      });
      gsap.set(".mbStoryCirBor2", {
        marginRight: "40%",
      });
      var storyAniDesktop = gsap.timeline({
        defaults: {
          ease: "Power2.ease",
          duration: 1,
        },
        onStart: () => {
          console.log("start");
          document.querySelector(".ScrollSmoother-wrapper").style.zIndex = 1;
        },
        scrollTrigger: {
          start: "-125% 100%",
          end: "100% 50%",
          scrub: true,
          pin: ".mbStory",
        },
      });
      storyAniDesktop
        .to(
          ".mbStoryCirBor",
          {
            scale: 1,
            autoAlpha: 0.2,
          },
          "-=.4"
        )
        .to(
          ".mbStoryCirBor1",
          {
            marginLeft: "25%",
            duration: 3,
          },
          "-=.7"
        )
        .to(
          ".mbStoryCirBor2",
          {
            marginRight: "25%",
            duration: 3,
          },
          "-=3"
        )
        .to(
          ".mbStoryTextContainer",
          {
            gap: "10em",
          },
          "-=2.6"
        )
        .to(
          [".mbStoryItem"],
          {
            scale: 1,
            opacity: 1,
          },
          "-=2.6"
        )
        .to(
          ".mbWelcomeTheIntro2",
          {
            opacity: 1,
          },
          "-=.5"
        )
        .to(
          ".mbWelcomeTheIntro2",
          {
            opacity: 0,
          },
          "+=1"
        )
        .to(".upperCircleRotateContainer", {
          scale: 2.2,
          autoAlpha: 0,
        })
        .to(
          ".mbStoryCirBor",
          {
            scale: 2.5,
            autoAlpha: 0,
          },
          "-=2"
        )
        .to(
          ".mbStoryTextContainer",
          {
            gap: "12em",
          },
          "-=2"
        )
        .to(
          [".mbStoryTextYou", ".mbStoryTextUs"],
          {
            opacity: 0,
          },
          "-=2"
        )
        .to(
          ".mbRotateLogoCirlce",
          {
            scale: 3.4,
            duration: 2.5,
          },
          "-=2"
        )
        .to(
          ".circleBlackBlur",
          {
            width: "300px",
            height: "300px",
            opacity: 1,
            duration: 3,
          },
          "-=2"
        )
        .to(
          ".mbRotateLogoCirlce",
          {
            opacity: 0,
          },
          "-=1"
        );
    }
    if (isMobile) {
      storyMobileAnimation();
    } else {
      storyDesktopAnimation();
    }

    // jSWork.js
    let workCx = {
      title: document.querySelector(".mbStoryTextWork"),
      trigger: document.querySelector(".mbPortfolioList"),
    };

    let workTl = gsap.timeline({
      scrollTrigger: {
        start: "25% 50%",
        end: "170% 50%",
        trigger: workCx.trigger,
        scrub: true,
      },
    });

    if (!isMobile) {
      workTl
        .to(workCx.title, {
          scale: 0.9,
          duration: 0.15,
        })
        .to(
          workCx.title,
          {
            yPercent: -300,
          },
          "+=0.1"
        );
    }

    return () => {
      console.log("cleanup now!");
    };
  }, [hasScrollSmoother, hasScrollTrigger, hasSplitText, isMobile, smoother]);

  const goTo = (index) => {
    switch (index) {
      case 0:
        window.smoother.scrollTo("#smooth-content", false, " top");
        break;
      case 1:
        window.smoother.scrollTo("#anchorIntro", false, " center");
        break;
      case 2:
        window.smoother.scrollTo("#anchorWork", false, " center");
        break;
      case 3:
        window.smoother.scrollTo("#anchorServices", false, "top top");
        break;
      case 4:
        window.smoother.scrollTo("#anchorContact", false, "top top");
        break;
    }
  };

  return (
    <>
      <Script
        src="/about/packages/ScrollSmoother.min.js"
        onLoad={() => setHasScrollSmoother(true)}
      />
      <Script
        src="/about/packages/SplitText.min.js"
        onLoad={() => setHasSplitText(true)}
      />
      <Script
        src="/about/packages/ScrollTrigger.min.js"
        onLoad={() => setHasScrollTrigger(true)}
      />
      <div
        className="splash-screen"
        style={{ display: showSplash ? "" : "none" }}
      ></div>

      <header id="mbMenu">
        <div className="mbMenuInner">
          <Link href="/" className="button mbMenuLogo">
            <img
              className="logoWmb mark"
              src="about/assets/graphics/logo-mark.svg"
              alt="We Met Before Logo"
            />
          </Link>

          <nav className="mbNavMenu">
            <ul className="mbNavList">
              <li className="mbNavItem">
                <button className="mbNavButton" onClick={() => goTo(1)}>
                  <span className="mbNavTxt mbNavTxt2">Home</span>
                  <div className="mbMenuBol mbMenuBolStory"></div>
                </button>
              </li>
              <li className="mbNavItem">
                <button className="mbNavButton" onClick={() => goTo(2)}>
                  <span className="mbNavTxt mbNavTxt3">Work</span>
                  <div className="mbMenuBol mbMenuBolWork"></div>
                </button>
              </li>
              <li className="mbNavItem">
                <button className="mbNavButton" onClick={() => goTo(3)}>
                  <span className="mbNavTxt mbNavTxt4">Services</span>
                  <div className="mbMenuBol mbMenuBolServices"></div>
                </button>
              </li>
              <li className="mbNavItem">
                <button className="mbNavButton" onClick={() => goTo(4)}>
                  <span className="mbNavTxt mbNavTxt5">Contact</span>
                  <div className="mbMenuBol mbMenuBolContact"></div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="upperCircleRotateContainer">
          <div className="mbRotateLogoCirlce">
            <img
              className="mbLogo"
              src="about/assets/graphics/logo_white.svg"
              alt="We Met Before Logo"
            />
            <div className="mbCircle sphereGradient"></div>
            <div className="circleBlackBlur"></div>
          </div>
          <div className="mbStorySetTop">
            <div className="mbStoryCirBor mbStoryCirBor1"></div>
            <div className="mbStoryCirBor mbStoryCirBor2"></div>
            <div className="mbStoryTextContainer">
              <span className="mbStoryItem mbStoryTextYou">You</span>
              <span className="mbStoryItem mbStoryTextWork">Work</span>
              <span className="mbStoryItem mbStoryTextUs">Us</span>
            </div>
          </div>
          <div className="mbWelcomeTheIntro mbWelcomeTheIntro1">
            <h2 className="introTitle" id="introTitle1">
              Who we are
            </h2>
            <div className="introQouteContainer">
              <h3 id="introQoute">
                We are a digital-focused Amsterdam-based studio. Our
                multidisciplinary team of freelancers and an A.I. multiplies
                creative results and helps brands flourish.
              </h3>
            </div>
          </div>
          <div className="mbWelcomeTheIntro mbWelcomeTheIntro2">
            <h2 className="introTitle">We believe in co-creating</h2>
            <div className="introQouteContainer">
              <h3 id="introQoute">
                The new game is co-creation, which - in our case - can be broken
                down into three phases: Branding, Design, and Development.
              </h3>
            </div>
          </div>
        </section>

        <div id="smooth-content">
          <section id="anchorIntro" className="mbIntro mbIntroBgPlaceholder">
            <div className="mbIntroBgContainer">
              <div className="rotateIntroHeads">
                <div className="headsRotateContinu">
                  <img
                    className="mbHead mbHead1"
                    src="about/assets/images/hero_head_top.png"
                    alt="Hero Head Image Top"
                  />
                  <img
                    className="mbHead mbHead2"
                    src="about/assets/images/hero_head_bottom.png"
                    alt="Hero Head Image Bottom"
                  />
                </div>
              </div>
              <div className="mbIntroAstroids">
                <img
                  className="mbAstroid mbAstroid1"
                  src="about/assets/images/mb_astroid1.png"
                  alt="Hero Astroid Image"
                />
                <img
                  className="mbAstroid mbAstroid2"
                  src="about/assets/images/mb_astroid2.png"
                  alt="Hero Astroid Image"
                />
                <img
                  className="mbAstroid mbAstroid3"
                  src="about/assets/images/mb_astroid3.png"
                  alt="Hero Astroid Image"
                />
              </div>
            </div>
            <div className="introTextContainer">
              <div className="mbWelcome">
                <span className="mbWelcomeTitle">We Met Before</span>
                <h1 className="mbWelcomeText">
                  Digital Design & Development Studio
                </h1>
              </div>
            </div>
          </section>

          <div id="anchorStory" className="mbStory"></div>

          <Portfolio portfolioItems={portfolioItems} />

          <section id="anchorServices" className="mbServicesContainerWrapper">
            <div className="mbServicesContainerIntro">
              <img
                src="about/assets/images/mb_astroid1.png"
                className="mbServicesIntro_Asteroid mbServicesIntro_Asteroid1"
              />
              <img
                src="about/assets/images/mb_astroid2.png"
                className="mbServicesIntro_Asteroid mbServicesIntro_Asteroid2"
              />
              <img
                src="about/assets/images/mb_astroid3.png"
                className="mbServicesIntro_Asteroid mbServicesIntro_Asteroid3"
              />
            </div>

            <div className="mbServicesContainer">
              <div className="mbServicesTopRow">
                <img
                  src="about/assets/icons/icon_ai.png"
                  className="mbServiceIcon mbServiceIconBranding"
                  id="mbServiceIconBranding1"
                />
                <img
                  src="about/assets/icons/icon_figma.png"
                  className="mbServiceIcon mbServiceIconBranding"
                  id="mbServiceIconBranding2"
                />
                <img
                  src="about/assets/icons/icon_figma.png"
                  className="mbServiceIcon mbServiceIconDesign"
                  id="mbServiceIconDesign1"
                />
                <img
                  src="about/assets/icons/icon_ae.png"
                  className="mbServiceIcon mbServiceIconDesign"
                  id="mbServiceIconDesign2"
                />
                <img
                  src="about/assets/icons/icon_webflow.png"
                  className="mbServiceIcon mbServiceIconDevelopment"
                  id="mbServiceIconDevelopment1"
                />
                <img
                  src="about/assets/icons/icon_react.png"
                  className="mbServiceIcon mbServiceIconDevelopment"
                  id="mbServiceIconDevelopment2"
                />
              </div>

              <div className="mbServicesIntro_h2Container">
                <h2 className="mbServicesIntro_h2 is-desktop">Services</h2>
                <h2 className="mbServicesIntro_h2 is-mobile">Our services</h2>
              </div>

              <div className="services-carousel">
                <div
                  id="thumbnail-carousel"
                  className="splide services-carousel_thumb-splide"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide services-carousel_thumb-slide">
                        <p className="services-carousel_thumb-title">
                          Branding
                        </p>
                      </li>
                      <li className="splide__slide services-carousel_thumb-slide">
                        <p className="services-carousel_thumb-title">Design</p>
                      </li>
                      <li className="splide__slide services-carousel_thumb-slide">
                        <p className="services-carousel_thumb-title">
                          Development
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  id="main-carousel"
                  className="splide"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide services-carousel_main-slide">
                        <p className="services-carousel_main-text">
                          Our team loves building from scratch or updating
                          existing identities. Together we craft and translate a
                          brand strategy into a visual identity, beginning with
                          a logo that tells a story. After that we start working
                          on the color palettes, fonts, imagery, tone of voice,
                          moodboards and mockups. All of this will be translated
                          into a brandbook. Working with accessible tools like
                          Figma, Sketch and Adobe XD makes everything (and easy
                          collaboration) possible. Think bold, think big, think
                          new.
                        </p>
                      </li>
                      <li className="splide__slide services-carousel_main-slide">
                        <p className="services-carousel_main-text">
                          We believe in a - broad spectrum - approach to create
                          state of the art designs and UX frameworks for your
                          digital products, whether it’s a new website or App.
                          Not only by developing the visual design but also
                          adding new trends like 3D art, illustrations and the
                          alignment of video and photography. All to deliver the
                          full brand story to any chosen audience.
                        </p>
                      </li>
                      <li className="splide__slide services-carousel_main-slide">
                        <p className="services-carousel_main-text">
                          We build modular and sustainable solutions that
                          perfectly match our designs and concepts. We are
                          always on the lookout for new tools to adapt to the
                          latest and ever evolving standards. Ranging from
                          robust headless Singe Page Webapps build in React with
                          Nextjs and Gatsbyjs, to quick but highly animated
                          landing pages in Webflow. Always with a friendly CMS
                          as a basis for our future relationship. This gives our
                          clients, plenty freedom for easy and ongoing edits.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mbServicesInnerContainer">
                <div className="mbServicesColLeft">
                  <button
                    id="mbBrandingClick"
                    className="button mbServiceClick noselect"
                    // onclick="switchService('Branding')"
                  >
                    Branding
                  </button>
                  <button
                    id="mbDesignClick"
                    className="button mbServiceClick noselect"
                    // onclick="switchService('Design')"
                  >
                    Design
                  </button>
                  <button
                    id="mbDevelopmentClick"
                    className="button mbServiceClick noselect"
                    // onclick="switchService('Development')"
                  >
                    Development
                  </button>
                </div>
                <div className="mbServicesColRight">
                  <article id="mbBrandingContent" className="mbServiceContent">
                    <p className="mbServiceContentText">
                      Our team loves building from scratch or updating existing
                      identities. Together we craft and translate a brand
                      strategy into a visual identity, beginning with a logo
                      that tells a story. After that we start working on the
                      color palettes, fonts, imagery, tone of voice, moodboards
                      and mockups. All of this will be translated into a
                      brandbook. Working with accessible tools like Figma,
                      Sketch and Adobe XD makes everything (and easy
                      collaboration) possible. Think bold, think big, think new.
                    </p>
                    <p className="mbServiceContentServices">
                      Logo / Brandbook / Visual Brand Identity / Strategy /
                      Copywriting
                    </p>
                  </article>
                  <article id="mbDesignContent" className="mbServiceContent">
                    <p className="mbServiceContentText">
                      We believe in a - broad spectrum - approach to create
                      state of the art designs and UX frameworks for your
                      digital products, whether it’s a new website or App. Not
                      only by developing the visual design but also adding new
                      trends like 3D art, illustrations and the alignment of
                      video and photography. All to deliver the full brand story
                      to any chosen audience.
                    </p>
                    <p className="mbServiceContentServices">
                      UX & UI Design / Webdesign / 3D Art / Illustration / Video
                      / Photography
                    </p>
                  </article>
                  <article
                    id="mbDevelopmentContent"
                    className="mbServiceContent"
                  >
                    <p className="mbServiceContentText">
                      We build modular and sustainable solutions that perfectly
                      match our designs and concepts. We are always on the
                      lookout for new tools to adapt to the latest and ever
                      evolving standards. Ranging from robust headless Singe
                      Page Webapps build in React with Nextjs and Gatsbyjs, to
                      quick but highly animated landing pages in Webflow. Always
                      with a friendly CMS as a basis for our future
                      relationship. This gives our clients, plenty freedom for
                      easy and ongoing edits.
                    </p>
                    <p className="mbServiceContentServices">
                      Websites / Webflow / React / Nextjs / Shopify /
                      Landingpages
                    </p>
                  </article>
                </div>
              </div>

              <div className="mbServicesBottomRow">
                <img
                  src="about/assets/icons/icon_ux.png"
                  className="mbServiceIcon mbServiceIconBranding"
                  id="mbServiceIconBranding3"
                />
                <img
                  src="about/assets/icons/icon_sketch.png"
                  className="mbServiceIcon mbServiceIconBranding"
                  id="mbServiceIconBranding4"
                />
                <img
                  src="about/assets/icons/icon_sketch.png"
                  className="mbServiceIcon mbServiceIconDesign"
                  id="mbServiceIconDesign3"
                />
                <img
                  src="about/assets/icons/icon_xd.png"
                  className="mbServiceIcon mbServiceIconDesign"
                  id="mbServiceIconDesign4"
                />
                <img
                  src="about/assets/icons/icon_next.png"
                  className="mbServiceIcon mbServiceIconDevelopment"
                  id="mbServiceIconDevelopment3"
                />
                <img
                  src="about/assets/icons/icon_gatsby.png"
                  className="mbServiceIcon mbServiceIconDevelopment"
                  id="mbServiceIconDevelopment4"
                />
              </div>
            </div>
          </section>

          <footer id="anchorContact" className="footer_container">
            <div className="footer_heads">
              <div className="mbContactHeadsWrapper">
                <img
                  className="mbFooterHead mbFooterHead1"
                  src="about/assets/images/hero_head_top.png"
                  alt="We Met Before Head Illustration"
                />
                <img
                  className="mbFooterHead mbFooterHead2"
                  src="about/assets/images/hero_head_bottom.png"
                  alt="We Met Before Head Illustration"
                />
                <div className="mbFooterBoll sphereGradient"></div>
              </div>
            </div>
            <div className="mbContactFooter">
              <div className="mbContactFooterSection mbContactAms">
                <span className="mbContactFooterLocation">AMS</span>
                <ul className="mbContactFooterList mbContactFooterListMargin">
                  <li className="footer-contact_item">Spijkerkade 2</li>
                  <li className="footer-contact_item">1021JS Amsterdam</li>
                  <li className="footer-contact_item">The Netherlands</li>
                </ul>
              </div>
              <div className="mbContactFooterSection mbContactSocial">
                <ul className="mbContactFooterList">
                  <li className="footer-contact_item">
                    <a className="footer-contact_link" href="tel:+31648405400">
                      +31648405400
                    </a>
                  </li>
                  <li className="footer-contact_item">
                    <a
                      className="footer-contact_link"
                      href="mailto:info@wemetbefore.com"
                    >
                      info@wemetbefore.com
                    </a>
                  </li>
                  <li className="footer-contact_item">
                    <a
                      className="footer-contact_link"
                      href="https://www.instagram.com/wemetbefore.studio/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                    /
                    <a
                      className="footer-contact_link"
                      href="https://www.behance.net/WeMetBefore"
                      target="_blank"
                    >
                      Behance
                    </a>
                    /
                    <a
                      className="footer-contact_link"
                      href="https://www.linkedin.com/company/wemetbefore"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mbContactFooterSection mbContactBcn">
                <ul className="mbContactFooterList mbContactFooterListMargin">
                  <li className="footer-contact_item">C/ de Magalhães 46</li>
                  <li className="footer-contact_item">08004 Barcelona</li>
                  <li className="footer-contact_item">Spain</li>
                </ul>
                <span className="mbContactFooterLocation">BCN</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default AboutContent;
