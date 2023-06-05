import React from "react";
import Image from "next/image";
export default function FirstBlock() {
  return (
    <section className="container-xl flex flex-col md:flex-row md:justify-between items-center pb-64 pt-44  bg-cover bg-cover bg-no-repeat bg-first-block  ">
      <div className="relative z-10 flex flex-col  basis-1/6 xl:basis-auto ">
        <h1 className="xs:pl-0 xs:text-center xs:ml-5 md:text-left lg:pl-40 mb-5 text-white">
          Powerful. Simplicity...
        </h1>
        <h3 className="xs:pl-0 xs:text-center xs:ml-5 md:text-left lg:pl-40 mb-10 text-white">
          Rename files and more. All without ....
        </h3>
        <button className="btn xs:self-center md:self-start bg-blue hover:bg-hover-blue rounded-lg px-10 py-4  xs:ml-5 lg:ml-44 mb-14 ">
          Try For Free
        </button>
      </div>
      <div className="relative z-10 basis-3/5 xl:basis-auto xs:hidden md:flex">
        <Image
          src="/images/MacbookPro.svg"
          width={970}
          height={500}
          alt="image"
        />
      </div>
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
