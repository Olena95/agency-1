"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
export default function FirstBlock() {
  return (
    <section className="container-xl flex flex-col md:flex-row md:justify-between items-center pb-64 pt-44   xs:px-8 md:px-0">
      <div className="md:h-3/4  md:w-2/5 xs:h-full  xs:w-full bg-first-flash absolute top-0 left-0 bg-contain bg-no-repeat"></div>
      <div className="relative z-10 flex flex-col  basis-1/2 xl:basis-1/3 ">
        <TypeAnimation
          sequence={[
            "We will create best\nwebsite for you", // Types 'One'
            2000, // Waits 1s
            "We will create best\nsocial media", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "We will create best\nbussines",
            2000, // Types 'Three' without deleting 'Two'
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className="xs:pl-0 xs:text-center xs:ml-5 md:text-left lg:pl-24 mb-5 text-white xs:text-3xl md:text-4xl xs:h-16 lg:h-24 "
        />

        <h3 className="xs:pl-0 xs:text-center xs:ml-5 md:text-left lg:pl-24 mt-8 mb-10 text-white">
          Rename files and more. All without ....
        </h3>
        <button className="btn xs:self-center md:self-start bg-light-green hover:bg-dark-gray  rounded-full px-10 py-4  xs:ml-5 lg:ml-44 mb-14 ">
          Try For Free
        </button>
      </div>
      <div className="relative z-10 basis-3/5 xl:basis-auto xs:hidden md:flex">
        <Image
          src="/images/content/MacbookPro1.svg"
          width={970}
          height={500}
          alt="image"
        />
      </div>
      <div className=" bg-contain bg-no-repeat xs:w-full  md:w-2/3  h-full  absolute xs:top-15  md:top-64  xl:top-96  right-0  flash-gradient"></div>
      <div className="relative z-10 xs:flex md:hidden">
        <Image
          src="/images/MacbookPro2.svg"
          width={970}
          height={500}
          alt="image"
        />
      </div>
    </section>
  );
}
