import React, { useState } from "react";
import logoImg from "../assets/Logo.png";
import rightArrow from "../assets/icons/rightArrow.svg";
import {
  LayoutDashboard,
  Clock4,
  BarChart4,
  ArrowRightLeft,
  HelpCircle,
} from "lucide-react";
const NavLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock4,
  },
  {
    name: "Analytics",
    icon: BarChart4,
  },
  {
    name: "Transaction",
    icon: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircle,
  },
];

const NavigationBar = () => {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <div className="px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen relative">
      <div className="logo-div flex space-x-3  items-center">
        <img src={logoImg} alt="" />
        <span>Money Tracker</span>
      </div>
      <div className="w-5 h-5 bg-[#FF8C8C] rounded-full -right-[10.5px] top-14 absolute flex items-center justify-center">
           <img className="w-[5px]" src={rightArrow} alt="" />
      </div>

      <div className="mt-9 flex flex-col space-y-8">
        {NavLinks.map((item, index) => (
          <div
            key={index}
            className={`flex space-x-3 p-2 rounded ${
              activeNav === index
                ? "bg-[#FF8C8C] text-white font-semibold hover:bg-[#ca4646]"
                : ""
            }`}
            onClick={() => setActiveNav(index)}
          >
            <item.icon />
            <span>{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
