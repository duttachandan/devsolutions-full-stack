"use client"

import Style from "@/style/style.module.css"
import AnimatedHeading from "@/components/AnimateHeading"
import { FaArrowTurnUp } from "react-icons/fa6";
import CountUp from "@/components/CountStart"

export default function Home() {
  return (
    <main>
      <div className="banner-section-background"></div>
      {/* Banner Section */}
      <section className="banner-section">
        <div
          className="min-h-[110vh] flex items-end 
        relative pt-25 pb-10 md:pt-37.5 md:pb-12">
          <div className="">
            <div className="">
              {/* Established */}
              <p className="copyright_text">
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
              <div>
                <h1
                  className={`${Style.font_baseNue} ${Style.main_heading} text-[30px]
                sm:text-[8.575vw] text-nowrap xl:text-[96px] uppercase font-bold`}
                >
                  {AnimatedHeading("Brave")}
                  {AnimatedHeading("Wired")}
                </h1>
                <div className={`${Style.main_font_after} text-nowrap`}>
                  <span className="text-[4.102vw] xl:text-[82px]">
                    {AnimatedHeading("Digital")}
                  </span>
                  <span>
                    {AnimatedHeading("Solutions")}
                  </span>
                </div>
              </div>
            </div>
            <p data-aos="fade-up" className={`mt-4 ${Style.subTtitle}`}>
              Techwave delivers
              cutting-edge <br /> IT solutions.
              We innovate for a smart hassle free growth
              and the future for your buisness.
            </p>
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
                  <p>Helping brands making there mark online.</p>
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
                  <p>Helping brands making there mark online.</p>
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
                  <p>Helping brands making there mark online.</p>
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
                  <p>Helping brands making there mark online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="about-section">
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
      </section> */}
      <section className="min-h-screen"></section>
    </main>
  );
}


