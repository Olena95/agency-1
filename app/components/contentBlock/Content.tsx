"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";
interface IContent {
  firstImgLeft: boolean;
}
export default function Content({ firstImgLeft }: IContent) {
  const content = [
    {
      title: "Headings, body and other common text elements",
      sub_title: "UI KIT",
      desc: "Most calendars are designed for teams. Slate is designed for freelancers",
      id: 1,
      image: "/images/content/MacbookPro1.svg",
      image_mob: "/images/content/MacbookPro1-mob.svg",
    },
    {
      title: "Toggle element based on the Card",
      sub_title: "COMPONENTS",
      desc: "Most calendars are designed for teams. Slate is designed for freelancers",
      id: 2,
      image: "/images/content/MacbookPro2.svg",
      image_mob: "/images/content/MacbookPro2-mob.svg",
    },
    {
      title: "Used for adding notices",
      sub_title: "CODE",
      desc: "Most calendars are designed for teams. Slate is designed for freelancers",
      id: 3,
      image: "/images/content/MacbookPro3.svg",
      image_mob: "/images/content/MacbookPro3-mob.svg",
    },
  ];
  const oddIndex = firstImgLeft ? 0 : 1;

  return (
    <div>
      {content.map((content, index) => (
        <InView>
          {({ inView, ref, entry }) => (
            <section
              ref={ref}
              key={content.id}
              className={`content-section flex xs:flex-col lg:flex-row justify-center items-center justify-between xs:py-20 lg:py-36  ${
                index % 2 === oddIndex ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:basis-7/12 flex justify-center xs:pb-14 lg:pb-0 ${
                  inView && "content-section__text"
                }`}
              >
                <div className=" lg:w-4/6 xs:text-center lg:text-left">
                  <h3 className="text-light-green font-bold text-2xl mb-2  ">
                    {content.sub_title}
                  </h3>
                  <h1 className="text-4xl font-bold leading-normal text-white">
                    {content.title}
                  </h1>
                  <p className=" text-2xl text-semi-gray lg:w-4/6 mt-4 leading-normal font-medium">
                    {content.desc}
                  </p>
                </div>
              </div>
              <div className="xs:hidden lg:block">
                <Image
                  src={content.image}
                  alt="laptop"
                  width={868}
                  height={507}
                />
              </div>
              <div className="xs:block lg:hidden">
                <Image
                  src={content.image_mob}
                  alt="laptop"
                  width={370}
                  height={212}
                />
              </div>
            </section>
          )}
        </InView>
      ))}
    </div>
  );
}
