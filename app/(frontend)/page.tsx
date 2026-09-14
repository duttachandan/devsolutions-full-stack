"use client"

import { useRef } from "react"
import Style from "@/style/style.module.css"
import splitAnimateText from "@/components/splitAnimateText"
import AnimatedHeading from "@/components/AnimateHeading"

export default function Home() {
  return (
    <main>
      <section className="banner-section min-h-screen">
        <div className="banner-section min-h-screen flex items-center">
          <div>
            <h1
              className={`${Style.font_baseNue} text-(--primary-color)
              text-[9.375vw] xl:text-[96px] uppercase font-bold`}
            >
              {AnimatedHeading("Inovative IT Solutions")}
            </h1>
            <p className="mt-4">
              Techwave delivers cutting-edge IT solutions.
              We innovate for a smart hassle free growth
              and the future for your buisness.
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2
          className={`${Style.font_baseNue} text-(--primary-color)
          text-[8.412vw] xl:text-[80px] uppercase font-bold text-nowrap`}
        >
          {AnimatedHeading("The Company")}
        </h2>
      </section>
      <section className="min-h-screen"></section>
    </main>
  );
}


