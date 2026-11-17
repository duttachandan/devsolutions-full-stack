"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: "First Project", color: "#171717" },
];

export default function SelectedWork() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();
        const ctx = gsap.context(() => {
            mm.add(
                {
                    isDesktop: "(min-width: 768px)",
                    isMobile: "(max-width: 767px)",
                    reduceMotion: "(prefers-reduced-motion: reduce)",
                },
                (context) => {
                    const { isDesktop, reduceMotion } = context.conditions as {
                        isDesktop: boolean;
                        isMobile: boolean;
                        reduceMotion: boolean;
                    };
                    // Distance from viewport top where cards stick,
                    // and the small peek offset between stacked cards.
                    const stickyTop = isDesktop ? 100 : 80;
                    const peek = isDesktop ? 16 : 10;
                    const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
                    cards.forEach((card, index) => {
                        const inner = card.querySelector<HTMLElement>(".stack-card-inner");
                        if (!inner) return;
                        // CSS sticky does the "pinning" (no ScrollTrigger pin needed).
                        gsap.set(card, { top: stickyTop + index * peek });
                        gsap.set(inner, { transformOrigin: "center top" });
                        // Shrink this card while the next one slides over it.
                        if (!reduceMotion && index < cards.length - 1) {
                            // gsap.to(inner, {
                            //     scale: 1 - (cards.length - 1 - index) * 0.03 - 0.03,
                            //     ease: "none",
                            //     scrollTrigger: {
                            //         trigger: cards[index + 1],
                            //         start: "top bottom",
                            //         end: () => `top ${stickyTop + (index + 1) * peek}px`,
                            //         scrub: true,
                            //         invalidateOnRefresh: true,
                            //     },
                            // });
                            gsap.to(inner, {
                                y: -900,
                                scrollTrigger: {
                                    trigger: cards[index + 1],
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: true,
                                }
                            })
                        };
                    });
                }
            );
        }, sectionRef);
        return () => {
            mm.revert();
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="selected-work-section relative bg-white pb-[15vh]"
        >
            <div className="relative">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="stack-card sticky mb-6 md:mb-10"
                        style={{ zIndex: project.id }}
                    >
                        <div
                            className="stack-card-inner mx-4 md:mx-10 flex items-center justify-center
                                overflow-hidden rounded-2xl md:rounded-3xl px-6
                                h-[60svh] min-h-70 max-h-160 md:h-[70svh]
                                will-change-transform"
                            style={{ backgroundColor: project.color }}
                        >
                            <h3 className="text-center font-bold text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}