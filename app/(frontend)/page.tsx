"use client"

import {useRef} from "react"
import gsap from 'gsap'
import Style from "@/style/style.module.css"
import splitAnimateText from "@/components/splitAnimateText"

export default function Home() {
  const selectionRef = useRef<HTMLElement>(null);
  return (
    <main>
      {/* Banner Section */}
      <section className="banner-section min-h-screen"></section>
      {/* About Section */}
      <section className="about-section">
        <h2
          className={`${Style.font_baseNue} text-(--primary-color)
        text-8xl uppercase font-bold text-nowrap`}
        >
          {splitAnimateText("The Company")}
        </h2>
      </section>
    </main>
  );
}


