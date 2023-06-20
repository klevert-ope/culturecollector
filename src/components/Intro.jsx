import React, { useEffect } from "react";
import { gsap } from "gsap";

const Intro = () => {
  useEffect(() => {
    let timeline = gsap.timeline();

    timeline
      .fromTo(
        "#culture",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "sine.in" }
      )
      .fromTo(
        "#collector",
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 2, ease: "sine.in" }
      )
      .fromTo(
        "#quote1",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 2, ease: "sine.in" }
      )
      .to(["#culture", "#collector", "#quote1"], {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        onComplete: showwelcome,
      })
      .from("#intro", { onComplete: showIntro })
      .from(".intro", {
        opacity: 0,
        duration: 1,
        ease: "power4.in",
        stagger: 0.2,
        onComplete: showDraggable,
      })
      .from("#draggable", {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: "sine.in",
        onComplete: showFooter,
      })
      .from("#footer", {
        opacity: 0,
        X: 20,
        duration: 0.2,
        ease: "sine.in",
      });

    function showwelcome() {
      document.getElementById("welcome").style.display = "none";
    }
    function showIntro() {
      document.getElementById("intro").style.display = "grid";
    }
    function showDraggable() {
      document.getElementById("draggable").style.display = "block";
    }
    function showFooter() {
      document.getElementById("footer").style.display = "block";
    }

    // Return a cleanup function to cancel the animations
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section id="welcome" className=" max-h-screen overflow-hidden">
      <div>
        <div className=" absolute top-10 right-5">
          <p
            id="quote1"
            className=" font-ClashGrotesk font-semibold max-w-xxs md:max-w-xs text-base lg:text-lg xl:text-xl opacity-0"
          >
            Music is the universal language that transcends boundaries, connects
            souls, and preserves the essence of our culture.
          </p>
        </div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className=" flex flex-row font-Technor font-extrabold text-4xl lg:text-6xl xl:text-7xl">
            <h1 id="culture" className=" text-red-600 opacity-0">
              Culture
            </h1>
            <h1 id="collector" className=" text-blue-700 opacity-0">
              Collector
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
