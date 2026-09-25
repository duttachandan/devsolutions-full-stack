"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  target: number;
  duration?: number;
};

const CountUp = ({ target, duration = 2 }: CountUpProps) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = countRef.current;

    if (!element) return;

    const counter = {
      value: 0,
    };

    const animation = gsap.to(counter, {
      value: target,
      duration,
      ease: "power2.out",

      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true,
      },

      onUpdate: () => {
        if (element) {
          element.textContent = Math.floor(counter.value).toString();
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [target, duration]);

  return <span ref={countRef}>0</span>;
};

export default CountUp;