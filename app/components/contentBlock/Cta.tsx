import React from "react";

export default function Cta() {
  return (
    <section className="flex justify-center xs:px-14 py-24 text-left bg-light-green">
      <div className="text-center md:px-3">
        <h2 className="mb-4 text-3xl font-bold  text-white">
          Explore endless possibilities with FinanceFlow
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <button className="btn xs:self-center md:self-start bg-white text-light-green hover:bg-background-black rounded-full px-10 py-4  xs:ml-5  mt-14  ">
          Send message
        </button>
      </div>
    </section>
  );
}
