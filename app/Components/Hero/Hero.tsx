import React from "react";
import Image from "next/image";
import {Libre_Bodoni} from "next/font/google";


const libre_bodoni = Libre_Bodoni({
  subsets: ["latin"],
})
const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className={`${libre_bodoni.className} w-[496px] h-[189px] absolute top-[316px] left-[176px] text-[40px] tracking-[2.5%] leading-[65.6px] font-bold text-[#000000]`}>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
        </div>
        <div className="w-[902px] h-[147px] absolute top-[533px] left-[171px]">
          <p className={`${libre_bodoni.className} w-[850px] h-[147px] text-3xl tracking-[2.5%] leading-[49.35px] font-medium text-[#787054]`}>
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
        </div>
        <div className="w-[288px] h-[58px] absolute top-[730px] left-[176px] bg-[#A29875] p-[10px] rounded-[10px] flex justify-center">
          <button className={`${libre_bodoni.className} text-3xl leading-[37.5px] font-medium text-[#FFFFFF]`}>
            Explore Now
          </button>
        </div>
      </div>
      <div className="w-[462px] h-[647px] absolute top-[198px] left-[1164px]">
        <Image
          src={"/images/figmaImage.JPG"}
          alt="hero-img"
          width={462}
          height={647}
        />
      </div>
    </div>
  );
};

export default Hero;
