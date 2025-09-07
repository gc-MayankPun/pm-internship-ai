// animations/ShowRecommendationAnimation.js
import gsap from "gsap";

export const showAnimation = (el) => {
  if (!el) return;
  gsap.fromTo(
    el,
    { height: 0, opacity: 0 },
    {
      height: el.scrollHeight, // dynamically use that element's height
      opacity: 1,
      duration: 0.4,
      ease: "power3.inOut",
    }
  );
};

export const closeAnimation = (el) => {
  if (!el) return;
  gsap.to(el, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power3.inOut",
  });
};
