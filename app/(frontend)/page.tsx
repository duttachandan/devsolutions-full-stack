"use client"

import Style from "@/style/style.module.css"
import AnimatedHeading from "@/components/AnimateHeading"

export default function Home() {
  return (
    <main>
      <div className="banner-section-background"></div>
      <section className="banner-section">
        <div className="min-h-[110vh] flex items-end relative pt-25 pb-10 md:pt-37.5 md:pb-12">
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
            <p className={`mt-4 ${Style.subTtitle}`}>
              Techwave delivers
              cutting-edge <br /> IT solutions.
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


