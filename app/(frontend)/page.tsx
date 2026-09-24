"use client"

import { useRef } from "react"
import Style from "@/style/style.module.css"
import splitAnimateText from "@/components/splitAnimateText"
import AnimatedHeading from "@/components/AnimateHeading"

export default function Home() {
  return (
    <main>
      <div className="banner-section-background"></div>
      <section className="banner-section min-h-screen">
        <div className="min-h-screen flex items-end py-10">
          <div>
            <div className="relative">
              <h1
                className={`${Style.font_baseNue} ${Style.main_heading}
              text-[8.575vw] text-nowrap xl:text-[96px] uppercase font-bold`}
              >
                {AnimatedHeading("Nexusvektra")}
              </h1>
              <div className={`${Style.main_font_after}`}>
                <span>Digital</span>
                <span>Solutions</span>
              </div>
            </div>
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
          {AnimatedHeading("Services")}
        </h2>
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


