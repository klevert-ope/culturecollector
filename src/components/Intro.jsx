import React, { useEffect } from "react";
import { gsap } from "gsap";

const Intro = () => {
  useEffect(() => {
    const introduction = gsap.timeline();

    introduction
      .from("#culture", { opacity: 0, y: 40, duration: 1, ease: "sine.out" })
      .from("#collector", { opacity: 0, y: -40, duration: 2, ease: "sine.out" })
      .from("#quote1", {
        opacity: 0,
        x: -10,
        duration: 2,
        ease: "sine.out",
      })

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
        ease: "power4",
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
  }, []);

  return (
    <section
      id="welcome"
      className=" h-screen flex flex-col justify-center items-center"
    >
      <div>
        <div className=" absolute top-10 right-5">
          <p
            id="quote1"
            className=" font-ClashGrotesk font-semibold max-w-xxs md:max-w-xs text-base lg:text-lg xl:text-xl"
          >
            Music is the universal language that transcends boundaries, connects
            souls, and preserves the essence of our culture.
          </p>
        </div>
        <div className=" flex flex-row justify-center font-Technor font-extrabold text-4xl lg:text-6xl xl:text-7xl">
          <div>
            <h1 id="culture" className=" text-red-600">
              Culture
            </h1>
          </div>
          <div>
            <h1 id="collector" className=" text-blue-700">
              Collector
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
