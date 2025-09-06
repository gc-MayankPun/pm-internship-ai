import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const useHomePageAnimation = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#about-section",
      { opacity: 0, y: "-10rem" },
      { opacity: 1, y: "0", ease: "power2.inOut" }
    );
  });
};

export default useHomePageAnimation;
