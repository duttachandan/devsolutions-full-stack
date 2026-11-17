"use client"
import Style from "@/style/style.module.css"
import AnimatedHeading from "@/components/AnimateHeading"
import { FaArrowTurnUp } from "react-icons/fa6";
import CountUp from "@/components/CountStart"
import OrdinarySection from "@/components/OrdinarySection";
import Image from "next/image"
import NokiaHand from "@/assets/Image/nokia_hand.avif"
import closeup_girl from "@/assets/Image/closeup-young-girl.jpg"
import handsome_glass from "@/assets/Image/handsome-guy-glass.jpg"
import isolated_guy from "@/assets/Image/isolated-gray-guy.jpg"
import Checkbox from "@/components/Checkbox";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoEyedrop } from "react-icons/io5";
import { IoImages } from "react-icons/io5";
import { PiTextAa } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoStack } from "react-icons/go";
import { FiDownloadCloud } from "react-icons/fi";
import MobileScreen from "@/assets/Image/mobileScreen.avif"
import SelectedWork from "@/components/StickyCard";
import { useState } from "react";

export default function Home() {
  const [checkedItems, setCheckedItems] = useState({
    cbx_12: false,
    increase_font: false,
    replace_images: false,
    fix_btn: false,
  });

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <main>
      <div className="banner-section-background"></div>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="mx-auto px-3.75 max-w-[1848px]">
          <div
            className="h-screen
          relative pt-25 pb-10 md:pt-37.5 md:pb-12">
            <div className="flex h-full items-end">
              <div className="w-full">
                {/* Established */}
                <p
                  data-aos="fade-up"
                  className={`copyright_text ${Style.font_Inter}`}
                >
                  ©19-26
                </p>
                {/* Services */}
                <div
                  className="text-right text-white mb-10 lg:absolute left-3.75 right-3.75
                top-[13.531vw] pr-3.75 lg:pr-0 font-semibold"
                >
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
                    sm:text-[7.575vw] text-nowrap font-bold`}
                  >
                    {AnimatedHeading("Engineering")}
                  </h1>
                  <div className={`${Style.main_font_after} text-nowrap lg:ml-10`}>
                    <span>
                      {AnimatedHeading("Your")}
                    </span>
                    <span>
                      {AnimatedHeading("Future")}
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
        </div>
      </section>

      {/* Works We Have Done So Far */}
      <section className="py-12 md:py-37.5 services_count relative">
        <div className="px-3.75 mx-auto max-w-[1848px]">
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
              className={`title2 font-medium 
            flex-1 text-(--font-inter) ${Style.font_Inter}`}>
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
        <div className="px-3.75 mx-auto max-w-[1848px]">
          <h2
            data-aos="fade-up"
            className={`${Style.font_Inter_h2} text-black 
            text-center text-[30px] md:text-[8.412vw] xl:text-[104px] font-bold`}
          >
            Your Goals, Our Priority
          </h2>
          <p
            data-aos="fade-up"
            className={`${Style.font_Inter} mt-10 md:mt-20
          text-center text-gray-500 max-w-150 mx-auto`}>
            From concept to launch, we're committed to your success with rapid response times and personalized attention to detail.
          </p>
          {/* Post Production Support */}
          <div data-aos="fade-up" data-aos-duration="1500" className="flex items-stretch flex-wrap mx-[-7.5px] mt-10">
            {/* First Slide */}
            <div className="px-[7.5px] w-full md:w-1/2 xl:w-1/4 mb-5">
              <div className="min-h-50 border border-gray-300 w-full">
                <Image
                  width={528}
                  height={528}
                  className="w-full h-87.5 object-cover"
                  src={NokiaHand}
                  alt="nokia hand sign"
                />
                <div className="px-7.5 pb-7.5 mt-7.5">
                  <h3 className={`${Style.font_Inter} text-[22px] font-semibold mb-3.5`}>24/7 priority care</h3>
                  <p className={`text-black/50 ${Style.font_Inter} text-[11px]`}>
                    Receive priority treatment for urgent tasks, with an
                    {" "}
                    <span className="text-black">average response time of 24 hours</span>
                    {" "}
                    for high-priority clients.
                  </p>
                </div>
              </div>
            </div>
            {/* Second Slide */}
            <div className="px-[7.5px] w-full md:w-1/2 xl:w-1/4 mb-5">
              <div className="min-h-50 bg-[#f5f5f5] h-full md:p-10 p-7.5 top-0 right-0">
                <h3 className={`${Style.font_Inter} text-[22px] font-semibold mb-3.5 capitalize`}>
                  Tailored tweaks for perfection
                </h3>
                <p className={`text-black/50 ${Style.font_Inter} text-[11px]`}>
                  Request custom revisions at any time. We provide <span className="text-black">up to 5 minor revisions</span> post-launch to keep things looking fresh.
                </p>
                <div className="flex gap-1.5 my-5">
                  <div className="rounded-full h-10 overflow-hidden w-10">
                    <Image width={200} height={200} className="object-cover h-full w-full" src={closeup_girl} alt="Image of profiles" />
                  </div>
                  <div className="rounded-full h-10 overflow-hidden w-10 opacity-50">
                    <Image width={200} height={200} className="object-cover h-full w-full" src={handsome_glass} alt="Image of profiles" />
                  </div>
                  <div className="rounded-full h-10 overflow-hidden w-10 opacity-50">
                    <Image width={200} height={200} className="object-cover h-full w-full" src={isolated_guy} alt="Image of profiles" />
                  </div>
                  <div className="rounded-full h-10 overflow-hidden w-10 opacity-50">
                    <Image width={200} height={200} className="object-cover h-full w-full" src={isolated_guy} alt="Image of profiles" />
                  </div>
                </div>
                <h4 className="mb-3 capitalize font-medium">Post-Launch requests </h4>
                <div className={`pr-5 pb-4 ${Style.font_Inter}`}>
                  <div className="flex items-center mb-2">
                    <Checkbox
                      className="cbx_12"
                      onChange={(checked) => handleCheckboxChange("cbx_12", checked)}
                    />

                    <label
                      htmlFor="cbx_12"
                      className={`text-[10px] ${Style.font_Inter} capitalize ${checkedItems["cbx_12"] ? "line-through text-gray-400" : ""
                        }`}
                    >
                      Align text margins properly
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <Checkbox
                      className="increase_font"
                      onChange={(checked) => handleCheckboxChange("increase_font", checked)}
                    />

                    <label
                      htmlFor="increase_font"
                      className={`text-[10px] ${Style.font_Inter} capitalize ${checkedItems.increase_font ? "line-through text-gray-400" : ""
                        }`}
                    >
                      Increase mobile menu font size
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <Checkbox
                      className="replace_images"
                      onChange={(checked) => handleCheckboxChange("replace_images", checked)}
                    />

                    <label
                      htmlFor="replace_images"
                      className={`text-[10px] ${Style.font_Inter} capitalize ${checkedItems.replace_images ? "line-through text-gray-400" : ""
                        }`}
                    >
                      Replace Images
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <Checkbox
                      className="fix_btn"
                      onChange={(checked) => handleCheckboxChange("fix_btn", checked)}
                    />
                    <label
                      htmlFor="fix_btn"
                      className={`text-[10px] ${Style.font_Inter} capitalize ${checkedItems.fix_btn ? "line-through text-gray-400" : ""
                        }`}
                    >
                      Fix button color: #f5f5f5
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Slide */}
            <div className="px-[7.5px] w-full md:w-1/2 xl:w-1/4 mb-5">
              <div className="min-h-50 bg-[#0c0c0c] h-full border_inside p-7.5 pt-15">
                <span></span>
                <span></span>
                <div className={`text-center text-white ${Style.font_Inter}`}>
                  <p className="text-[13px]">Download Brand Kit</p>
                  <div className="flex gap-2.5 items-center justify-center mt-4">
                    <IoFolderOpenOutline style={{ color: "gray" }} />
                    <IoEyedrop style={{ color: "gray" }} />
                    <IoImages style={{ color: "gray" }} />
                    <PiTextAa style={{ color: "gray" }} />
                    <RxHamburgerMenu style={{ color: "gray" }} />
                    <GoStack style={{ color: "gray" }} />
                  </div>
                  <div className="flex items-center justify-center mt-15">
                    <div className="relative h-25 flex justify-center items-center w-25 rounded-full bg-[#EE363D]">
                      <span
                        className="absolute inline-block -inset-2.5 rounded-full border-2"
                        style={{ border: "1px solid gray" }}
                      ></span>
                      <span className="absolute inline-block top-1/2 left-1/2 -translate-1/2 
                    h-10 w-10 rounded-full blur-xl bg-white z-10"
                      ></span>
                      <FiDownloadCloud style={{ color: "white" }} size={24} />
                    </div>
                  </div>
                  <h4 className="mt-8 capitalize text-[22px] font-bold">Brand kit at your fingertips</h4>
                  <p className="text-[11px] my-8 text-gray-500">
                    Receive a full branding toolkit,
                    from logos to color schemes and typography,{" "}
                    <br />
                    <span className="font-bold text-white">download all assets</span>{" "} or share them with your team.
                  </p>
                </div>
              </div>
            </div>
            {/* Fourth Slide */}
            <div className="px-[7.5px] w-full md:w-1/2 xl:w-1/4 mb-5">
              <div className={`min-h-100 relative ${Style.Bg_card} h-full w-full overflow-hidden`}>
                <div className="bottom-0 absolute left-4.5 right-4.5">
                  <div className="w-fit relative mx-auto h-fit">
                    <span
                      className="absolute inset-0 backdrop-blur-[6px] 
                      z-1 bg-white/50 top-1 rounded-t-[50px]"
                    ></span>
                    <Image width={498}
                      className="w-full relative z-2 max-h-100 h-full object-contain"
                      src={MobileScreen}
                      alt="mobile screen"
                    />
                    <div
                      className={`
                        time text-white absolute 
                        top-20 left-0 right-0 z-2 text-center 
                        text-6xl ${Style.font_Inter} font-semibold`}
                    >10:45</div>
                    <div
                      className="notification absolute top-45 flex items-center gap-2 shadow-lg
                      px-5 py-2 z-20 -left-2.5 -right-2.5 bg-white rounded-xl"
                    >
                      <Image
                        width={250}
                        height={250}
                        className="h-12.5 w-12.5 rounded-full object-cover"
                        src={closeup_girl}
                        alt="Developer photo"
                      />
                      <div className="">
                        <div className="top flex items-center gap-2">
                          <h5 className="text-[12px] font-semibold">Designer</h5>
                          <div className="text-[11px] text-black/50">Today 09:17</div>
                        </div>
                        <div className="bottom text-[11px] text-black/50 pt-1 font-medium">
                          Logo update complete,
                          <br />
                          ready for your review!
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-44 -left-1 -right-1 bg-white blur-lg rounded-xl h-20 z-10"></div>
                    <div className="absolute top-46 -left-1 -right-1 bg-white rounded-xl h-18 z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="selected-work-section relative bg-white pb-20">
        {/* Intro section */}
        <div className="px-3.75 mx-auto max-w-[1848px] py-20">
          <div className="text-center mb-3">
            <span className="selected_work">
              Selected Work
            </span>
          </div>
          <h2
            data-aos="fade-up"
            className={`${Style.font_Inter_h2} text-black 
            text-center text-[30px] md:text-[8.412vw] xl:text-[104px] font-bold`}
          >
            Proven results,
            <br />
            stunning designs
          </h2>
          <p
            data-aos="fade-up"
            className={`${Style.font_Inter} tracking-tighter font-semibold uppercase
            text-6xl mt-10 md:mt-20 text-center text-black max-w-150 mx-auto`}
          >
            2k26
          </p>
        </div>
        {/* Stacking cards */}
        <SelectedWork />
      </section>
      {/* <section className="min-h-screen"></section> */}
    </main>
  );
}


