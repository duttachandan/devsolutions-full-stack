"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedHeading(text: string) {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !headingRef.current) return;
        const letters = headingRef.current.querySelectorAll(".letter");
        const ctx = gsap.context(() => {
            gsap.fromTo(
                letters,
                {
                    opacity: 0,
                    y: 100,
                    scale: 1.3,
                },
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "expo.inOut",
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);


    return (
        <span ref={sectionRef}>
            <span ref={headingRef}>
                {text.split("").map((letter, index) => (
                    <span
                        key={index}
                        className="letter"
                        style={{
                            display: "inline-block",
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </span>
        </span>
    );
}