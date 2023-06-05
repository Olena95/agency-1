import React from "react";
import Image from "next/image";
import TestIcon from "../Icons/TestIcon";
export default function Features() {
  const features = [
    {
      title: "Gorgeous design",
      icon: <TestIcon />,
      desc: "Slate helps you see how many more days you need to work to reach your financial goal ",
      id: 1,
    },
    {
      title: "Performance",
      icon: <TestIcon />,
      desc: "Slate helps you see how  many more days you need  to work to reach your financial goal",
      id: 2,
    },
    {
      title: "Content",
      icon: <TestIcon />,
      desc: "Slate helps you see how  many more days you need  to work to reach your financial goal",
      id: 3,
    },
  ];
  return (
    <section className="flex flex-col items-center mb-12 mt-20">
      <h1 className="mb-4 xs:2/3 mb:w-1/3 text-center">AMAZING FEATURES</h1>
      <h3 className="xs:2/3 mb:w-1/3 text-center text-semi-gray ">
        Most calendars are designed for teams. Slate is designed for freelancers
      </h3>
      <div className="grid md:grid-cols-3 gap-x-14 mt-12">
        {features.map((feature, i) => (
          <div
            key={feature.id}
            className={`flex flex-col items-center border rounded-xl border-light-gray max-w-xs  px-10 py-12 shadow-lg mb-12`}
          >
            <div className="mb-5"> {feature.icon}</div>

            <h4 className="text-bold text-center text-2xl mb-8 ">
              {feature.title}
            </h4>
            <p className="text-semi-gray text-center mb-8 text-base">
              {feature.desc}
            </p>
            <button className="text-blue">Learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
