"use client"

import Style from "@/style/style.module.css"
import AnimatedHeading from "@/components/AnimateHeading"
import { FaArrowTurnUp } from "react-icons/fa6";
import CountUp from "@/components/CountStart"
import OrdinarySection from "@/components/OrdinarySection";


export default function Home() {
  return (
    <main>
      <div className="banner-section-background"></div>
      {/* Banner Section */}
      <section className="banner-section">
        <div
          className="h-screen
        relative pt-25 pb-10 md:pt-37.5 md:pb-12">
          <div className="flex h-full items-end">
            <div className="w-full">
              {/* Established */}
              <p data-aos="fade-up" className="copyright_text">
                ©19-26
              </p>
              {/* Services */}
              <div
                className="text-right text-white mb-10 
              lg:absolute left-3.75 right-3.75
              top-[18.531vw] pr-3.75 lg:pr-0 font-semibold">
                <ul>
                  <li className="service_showcase" style={{ "--content": `"UI/UX Design"` } as React.CSSProperties}>
                    <span>UI/UX Design</span>
                  </li>
                  <li className="service_showcase" style={{ "--content": `"Development"` } as React.CSSProperties}>
                    <span>Development</span>
                  </li>
                  <li className="service_showcase" style={{ "--content": `"Brand Identity Design"` } as React.CSSProperties}>
                    <span>Brand Identity Design</span>
                  </li>
                  <li className="service_showcase" style={{ "--content": `"Ongoing Support"` } as React.CSSProperties}>
                    <span>Ongoing Support</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <h1
                  className={`${Style.font_baseNue} ${Style.main_heading} text-[30px]
                sm:text-[8.575vw] text-nowrap uppercase font-bold`}
                >
                  {AnimatedHeading("Brave")}
                  {AnimatedHeading("Wired")}
                </h1>
                <div className={`${Style.main_font_after} text-nowrap lg:ml-10`}>
                  <span>
                    {AnimatedHeading("Digital")}
                  </span>
                  <span>
                    {AnimatedHeading("Solutions")}
                  </span>
                </div>
                <p
                  data-aos="fade-up"
                  className={`mt-4 lg:absolute bottom-[1.8vw] left-0
                ${Style.subTtitle} ${Style.font_Inter}`}>
                  BraveWired delivers
                  cutting-edge <br /> IT solutions.
                  We innovate for a smart hassle free growth
                  and the future for your buisness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works We Have Done So Far */}
      <section className="py-12 md:py-37.5 services_count relative">
        <div className="container-fluid">
          <div
            className="flex flex-col md:flex-row 
          items-start md:items-center gap-9 md:gap-28 flex-wrap 
          justify-between">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex gap-2 items-center">
              <FaArrowTurnUp
                style={{ rotate: "90deg" }}
                className="text-(--primary-color)" />
              <span>Let's talk</span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="title2 font-medium 
            flex-1 text-(--font-inter)">
              Our work speaks through numbers.
              <br />
              Here’s what we’ve achieved so far.
            </div>
          </div>
          {/* Services Counts */}
          <div
            className="flex flex-wrap mt-12 md:mt-37.5 
          px-3.75 -mx-3.75"
          >
            <div
              className="card px-3.75 overflow-hidden
            w-full md:w-1/2 lg:w-1/4 mb-3">
              <div data-aos="fade-left">
                <div className="card_stats">
                  {CountUp({ target: 17 })}+
                </div>
                <div className="card_content mt-3.75">
                  <h3 className="font-medium text-[24px] text-nowrap mb-3">Websites Launched</h3>
                  <p className="text-gray-500">Helping brands making there mark online.</p>
                </div>
              </div>
            </div>
            <div className="card px-3.75 w-full md:w-1/2 lg:w-1/4 overflow-hidden mb-3">
              <div data-aos="fade-right">
                <div className="card_stats">
                  {CountUp({ target: 3 })}M+
                </div>
                <div className="card_content mt-3.75">
                  <h3 className="font-medium text-[24px] text-nowrap mb-3">Users Reached</h3>
                  <p className="text-gray-500">Helping brands making there mark online.</p>
                </div>
              </div>
            </div>
            <div className="card px-3.75 w-full md:w-1/2 lg:w-1/4 overflow-hidden mb-3">
              <div data-aos="fade-left">
                <div className="card_stats">
                  {CountUp({ target: 98 })}%
                </div>
                <div className="card_content mt-3.75">
                  <h3 className="font-medium text-[24px] text-nowrap mb-3">Client Satisfaction Rate</h3>
                  <p className="text-gray-500">Helping brands making there mark online.</p>
                </div>
              </div>
            </div>
            <div className="card px-3.75 w-full md:w-1/2 lg:w-1/4 overflow-hidden mb-3">
              <div data-aos="fade-right">
                <div className="card_stats">
                  {CountUp({ target: 8 })}+
                </div>
                <div className="card_content mt-3.75">
                  <h3 className="font-medium text-[24px] text-nowrap mb-3">Years Of Expertise</h3>
                  <p className="text-gray-500">Helping brands making there mark online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Ordinary to ExtraOrdinary */}
      <OrdinarySection />

      <section className="about-section py-17.5 md:py-37.5">
        <h2
          data-aos="fade-up"
          className={`${Style.font_Inter} 
          text-black text-center text-[30px]
          md:text-[8.412vw] xl:text-[80px] 
          font-bold`}
        >
          Your Goals, Our Priority
        </h2>
        <p
          data-aos="fade-up"
          className={`${Style.font_Inter} mt-10 md:mt-20
        text-center text-gray-500 max-w-150 mx-auto`}>
          From concept to launch, we're committed to your success with rapid response times and personalized attention to detail.
        </p>
      </section>

      <section className="min-h-screen"></section>
    </main>
  );
}


