"use client";
import { useEffect, createRef } from "react";
import lottie from "lottie-web";

const HeroAnimation = ({ lottie_path }: { lottie_path: string }) => {
  let animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    const animate = lottie.loadAnimation({
      container: animationContainer.current as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: lottie_path,
    });

    return () => animate.destroy();
  }, [animationContainer, lottie_path]);
  return <div className="w-full h-full" ref={animationContainer}></div>;
};

export default HeroAnimation;
