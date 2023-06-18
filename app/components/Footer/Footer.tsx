import React from "react";
import FBIcon from "../Icons/social/FBIcon";

export default function Footer() {
  const socialMedia = [
    {
      id: 1,
      icon: <FBIcon />,
    },
    {
      id: 2,
      icon: <FBIcon />,
    },
    {
      id: 3,
      icon: <FBIcon />,
    },
  ];
  return (
    <div className="bg-blue flex justify-center items-center">
      <div className="w-4/5 bg-white flex xs:flex-col lg:flex-row items-center justify-between py-11 px-9">
        <div className="xs:pb-8 lg:pb-0">LOGO</div>
        <div className="xs:pb-8 lg:pb-0 flex xs:w-4/5 lg:w-1/5 justify-between">
          {socialMedia.map((icon) => (
            <div key={icon.id}>{icon.icon}</div>
          ))}
        </div>
        <div>Just type what's on your mind and we'll </div>
      </div>
    </div>
  );
}
