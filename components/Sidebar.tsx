import React, { type Dispatch, type SetStateAction } from 'react'
import { RxCross2 } from "react-icons/rx";
import Style from "@/style/style.module.css"
import Link from 'next/link';

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Sidebar = ({ toggle, setToggle }: {
    toggle: boolean,
    setToggle: Dispatch<SetStateAction<boolean>>,
}) => {
    const animateLinks = (text: string) => {
        return text.split("").map((elm, index) => {
            return (
                <span
                    className={`
                            text-[24px] sm:text-[38px] text-nowrap 
                            md:text-[80px] ${Style.text_BaseNeuLight} 
                            font-bold uppercase ${Style.span_hover_effect}`
                    }
                    style={{
                        "--index": index,
                        "--content": `"${elm == ' ' ? '-' : elm}"`,
                    } as React.CSSProperties}
                    key={index} 
                >
                    <span
                        style={{
                            "--index": index,
                            "--content": `"${elm}"`,
                        } as React.CSSProperties}
                    >
                        {elm == ' ' ? '-' : elm}
                    </span>
                </span>
            )
        });
    }
     
    return (
        <>
            <div
                className={`fixed h-screen w-screen top-0 left-0 
                bg-(--primary-color) text-(--secondary-color) ${Style.sidebar}
                ${toggle ? Style.sidebar_show : Style.sidebar_hide} px-3.75`}
            >
                <div
                    className='flex items-center sm:px-3.75 
                    pt-3.75 justify-between mb-4'
                >
                    <Link className="w-37.25" href="/">
                        <svg
                            className="w-full object-cover"
                            xmlns="http://www.w3.org/2000/svg"
                            width="149" height="48" viewBox="0 0 149 48" fill="none">
                            <path d="M58.3157 0C37.8202 31.6013 29.1968 47.0305 14.7736 47.0305C0.350428 47.0305 -5.15368 29.5323 5.73544 17.7199H19.7999C14.0504 21.2591 9.83482 33.4401 19.3192 33.4401C28.8036 33.4401 39.3426 19.1901 47.6103 5.25935H31.3792L35.4786 0.00141225H58.3157V0ZM72.9584 13.9068C72.9469 13.9209 59.5325 30.1452 69.3239 46.4613H56.6771V43.3684C53.288 46.6181 48.9777 47.94 45.5355 46.3709C40.6684 44.1494 39.3814 36.9793 42.6643 30.3571C45.9458 23.7334 52.5533 20.166 57.4218 22.3875C59.0403 23.1262 60.2642 24.4113 61.0563 26.0425L63.8256 18.9613H48.8284L52.1272 13.9054H72.9598L72.9584 13.9068ZM146.175 41.2147C147.736 41.2147 149 42.5154 149 44.1226C149 45.7298 147.736 47.0305 146.175 47.0305C144.614 47.0305 143.35 45.7298 143.35 44.1226C143.35 42.5154 144.615 41.2147 146.175 41.2147ZM68.8547 27.2599C71.2423 18.1182 78.4066 12.0327 84.8605 13.6653C90.3359 15.0507 93.5385 21.55 92.9215 29.0719H76.1208C74.6845 33.7578 75.4163 38.1063 77.7881 38.8378C79.7998 39.4592 82.3495 37.2857 84.0183 33.7762H92.0506C89.5138 42.579 82.5217 48.3609 76.2155 46.765C69.763 45.1324 66.4686 36.3988 68.8533 27.2599H68.8547ZM121.19 27.0071C123.574 17.8654 130.741 11.7799 137.193 13.4125C143.645 15.0437 146.941 23.7786 144.555 32.9175C142.169 42.0592 135.003 48.1448 128.552 46.5122C122.098 44.881 118.805 36.1488 121.19 27.0071ZM94.9863 27.0071C97.3739 17.8654 104.538 11.7799 110.992 13.4125C115.945 14.6666 119.039 20.1053 119.129 26.6992H111.82C111.863 23.9453 111.009 21.8297 109.421 21.3396C107.015 20.5968 103.835 23.8549 102.316 28.6171C100.797 33.3807 101.516 37.8436 103.921 38.585C105.927 39.205 108.474 37.0414 110.144 33.5418H118.181C115.64 42.3346 108.653 48.108 102.35 46.5108C95.8974 44.8782 92.603 36.146 94.9877 27.0057L94.9863 27.0071ZM146.175 41.5946C144.819 41.5946 143.718 42.7258 143.718 44.1226C143.718 45.5193 144.819 46.6506 146.175 46.6506C147.531 46.6506 148.631 45.5193 148.631 44.1226C148.631 42.7258 147.531 41.5946 146.175 41.5946ZM146.31 42.9843C146.551 42.9843 146.756 43.0252 146.927 43.1071C147.097 43.1848 147.229 43.3091 147.32 43.4772C147.413 43.6438 147.459 43.8613 147.459 44.1212C147.459 44.381 147.413 44.5971 147.32 44.7652C147.229 44.9332 147.097 45.0589 146.927 45.1408C146.756 45.2199 146.549 45.2609 146.31 45.2609H145.404V42.9857H146.31V42.9843ZM145.787 44.9403H146.305C146.427 44.9403 146.532 44.9248 146.627 44.8937C146.723 44.8612 146.802 44.8146 146.865 44.7496C146.931 44.6861 146.98 44.6056 147.011 44.5081C147.046 44.4079 147.063 44.2921 147.063 44.1565V44.0859C147.063 43.9489 147.046 43.8317 147.011 43.7342C146.978 43.6353 146.931 43.552 146.865 43.4899C146.802 43.4249 146.721 43.3769 146.627 43.3472C146.533 43.3176 146.427 43.3006 146.305 43.3006H145.787V44.9403ZM57.2281 27.4181C55.2839 26.3207 52.0368 28.2626 49.9749 31.758C47.9116 35.252 47.8154 38.9734 49.7597 40.0722C51.7039 41.1695 54.9524 39.2276 57.0143 35.735C59.0762 32.241 59.1738 28.5168 57.2281 27.4195V27.4181ZM135.62 21.3396C133.215 20.5953 130.034 23.8535 128.516 28.6171C126.998 33.3807 127.717 37.8422 130.122 38.5864C132.525 39.3293 135.708 36.0726 137.224 31.3089C138.742 26.5453 138.023 22.0839 135.619 21.3396H135.62ZM83.2879 21.5924C81.3767 21.0007 78.9791 22.9355 77.3103 26.14H85.6712C85.5507 23.7885 84.7171 22.033 83.2879 21.5924ZM89.5669 11.6302H79.7266L79.3794 9.82526L89.9127 8.09098L89.5669 11.6316V11.6302Z" fill="CurrentColor"></path>
                        </svg>
                    </Link>

                    <div className={`${Style.text_white} font-bold uppercase text-[20px] sm:block hidden`}>
                        Build With Purpose
                    </div>

                    <span
                        className={`p-2 ${Style.bg_secondary} flex 
                        items-center justify-center mb-0 ${Style.primary_btn} 
                        uppercase gap-3 ${Style.close_btn} cursor-pointer`}
                        onClick={() => setToggle(prev => !prev)}
                    >
                        <RxCross2 size={24} style={{ color: '#EE363D', fill: 'white', strokeWidth: '1.5' }} />
                        <span className='font-semibold'>
                            Close
                        </span>
                    </span>
                </div>

                <div className=''>
                    {/* Navbar Links */}
                    <ul className='pt-3.75'>
                        <li>
                            <Link className={`${Style.nav_links}`} href={'/about'}>
                                {
                                    animateLinks('About')
                                }
                            </Link>
                        </li>
                        <li>
                            <Link className={`${Style.nav_links}`} href={'/about'}>
                                {
                                    animateLinks('Services')
                                }
                            </Link>
                        </li>
                        <li>
                            <Link className={`${Style.nav_links}`} href={'/about'}>
                                {
                                    animateLinks('Contact Us')
                                }
                            </Link>
                        </li>
                        <li>
                            <Link className={`${Style.nav_links}`} href={'/about'}>
                                {
                                    animateLinks('Career')
                                }
                            </Link>
                        </li>
                        <li>
                            <Link className={`${Style.nav_links}`} href={'/about'}>
                                {
                                    animateLinks('Blogs')
                                }
                            </Link>
                        </li>
                    </ul>
                    {/* Social Media */}
                    <div className='md:fixed top-18.5 right-8'>
                        {/* Social Icons */}
                        <div className='flex gap-2'>
                            <Link
                                className='p-3 border-2 rounded-full hover:bg-(--secondary-color) social-links'
                                href=""
                            >
                                <FaLinkedinIn size={24} />
                            </Link>
                            <Link
                                className='p-3 border-2 rounded-full hover:bg-(--secondary-color) social-links'
                                href=""
                            >
                                <FaInstagram size={24} />
                            </Link>
                            <Link
                                className='p-3 border-2 rounded-full hover:bg-(--secondary-color) social-links'
                                href=""
                            >
                                <FaLinkedinIn size={24} />
                            </Link>
                            <Link
                                className='p-3 border-2 rounded-full hover:bg-(--secondary-color) social-links'
                                href=""
                            >
                                <FaLinkedinIn size={24} />
                            </Link>
                        </div>
                    </div>     
                </div>
            </div>
        </>
    )
}

export default Sidebar




