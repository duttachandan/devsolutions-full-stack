import React from 'react'
import Image from 'next/image'
import bg from "@/assets/Image/vOFoMV3UDuqKgUksSbkRhTzIp4I.jpg"

const OrdinarySection = () => {
    return (
        <section
            className="relative flex 
      items-center justify-center 
      py-37.5">
            <div className="flex items-center justify-center">
                <div className="max-w-228.5 w-full absolute top-1/2 left-1/2 -translate-1/2">
                    <Image
                        width={1920}
                        height={1080}
                        quality={100}
                        className="w-full object-contain"
                        src={bg}
                        alt=""
                    />
                </div>
                <h2
                    className="content-ordinary text-[30px] md:text-[70px] lg:text-[120px] xl:text-[150px] text-center font-semibold
            relative z-1 text-white mix-blend-difference">
                    From ordinary
                    <br />
                    to extra ordinary
                </h2>
            </div>
        </section>
    )
}

export default OrdinarySection