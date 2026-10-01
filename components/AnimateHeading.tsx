"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedHeading(text: string) {
    const sectionRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !headingRef.current) return;

        let ctx: gsap.Context | null = null;

        const startAnimation = () => {
            if (!sectionRef.current || !headingRef.current) return;

            const letters =
                headingRef.current.querySelectorAll(".letter");

            if (!letters.length) return;

            ctx = gsap.context(() => {
                gsap.to(letters, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "expo.inOut",
                    stagger: 0.05,

                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                });
            }, sectionRef);
        };

        const handleLoaderComplete = () => {
            /*
             * Wait until the loader has completely disappeared
             * and the browser has painted the revealed page.
             */
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    startAnimation();

                    ScrollTrigger.refresh();
                });
            });
        };

        window.addEventListener(
            "loaderComplete",
            handleLoaderComplete
        );

        return () => {
            window.removeEventListener(
                "loaderComplete",
                handleLoaderComplete
            );

            ctx?.revert();
        };
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

                            /*
                             * IMPORTANT:
                             * The letters are invisible BEFORE
                             * JavaScript/GSAP starts.
                             */
                            opacity: 0,
                            transform: "translateY(100px) scale(1.3)",
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </span>
        </span>
    );
}