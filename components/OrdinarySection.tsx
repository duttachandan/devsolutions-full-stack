"use client";

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import bg from "@/assets/Image/vOFoMV3UDuqKgUksSbkRhTzIp4I.jpg"
import gsap from 'gsap';
import { BsArrowDown } from "react-icons/bs";

const OrdinarySection = () => {
    const ImageRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ImageRef.current || !sectionRef.current) return;
        const Image = ImageRef.current;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                Image,
                {
                    scaleX: 1,
                    y: 10,
                },
                {
                    scale: 1.06,
                    ease: 'none',
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        end: "top 10%",
                        scrub: true,
                        toggleActions: "play none none reverse"
                    },
                }
            )
        }, sectionRef);
        return () => ctx.revert();
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative flex 
            items-center justify-center py-17.5
            section-oridinary md:py-37.5"
        >
            <div className="flex items-center justify-center">
                <div className="max-w-228.5 w-full">
                    <Image
                        ref={ImageRef}
                        width={1920}
                        height={1080}
                        quality={100}
                        className="w-full object-contain"
                        src={bg}
                        alt=""
                    />
                </div>
                <h2
                    data-aos="fade-up"
                    className="absolute top-1/2 left-1/2 -translate-1/2 content-ordinary w-full
                    text-[30px] md:text-[70px] lg:text-[120px] xl:text-[150px] text-center font-semibold
            z-1 text-white mix-blend-difference">
                    From ordinary
                    <br />
                    to extra ordinary
                </h2>
            </div>
            <div
                className='absolute left-1/2 top-full p-5 
            rounded-full bg-black text-white 
            -translate-1/2'>
                <BsArrowDown />
            </div>
        </section>
    )
}

export default OrdinarySection