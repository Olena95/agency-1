import React from "react";
import Image from "next/image";
import Link from "next/link";
import MenuMobile from "../Icons/MenuMobile";

export default function Header() {
  const headerBtn = [
    { title: "Головна", href: "/", id: 1 },
    { title: "Портфоліо", href: ".", id: 2 },
    { title: "Ціни", href: "/", id: 3 },
    { title: "Про нас", href: "/", id: 4 },
    { title: "Контакти", href: "/", id: 5 },
  ];
  return (
    <div className="flex justify-between xs:px-5 mb:px-10 py-5 absolute top-0 w-full z-10">
      <div className="text-white text-bold">LOGO</div>
      <div className="w-3/5 flex justify-between xs:hidden md:flex">
        {headerBtn.map((btn) => (
          <Link
            key={btn.id}
            className="text-base text-white hover:font-bold"
            href={btn.href}
          >
            {btn.title}
          </Link>
        ))}
      </div>
      <div className=" xs:flex md:hidden">
        <MenuMobile />
      </div>
    </div>
  );
}
