import React from "react";
import logo from "../../assets/imgs/logo.png";
import { MoveRight } from "lucide-react";

export default function navbar() {
  return (
    <header className=" wrapper py-6  ">
      <nav className="flex items-center justify-between px-4 py-3 border border-[#197686] bg-[#05252C] backdrop-filter rounded-3xl backdrop-blur-sm ">
        {/* logo */}
        <div className=" w-[92px]">
          <img src={logo} alt="" className=" w-full h-full" />
        </div>

        {/* nav links */}
        <div>
          <ul className=" flex  items-center space-x-4 font-Nanum ">
            <li className=" ">
              <a href="#" className="p-2 text-white">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="p-2 text-[#B3B3B3]">
                My Tickets
              </a>
            </li>
            <li>
              <a href="#" className="p-2 text-[#B3B3B3]">
                About Project
              </a>
            </li>
          </ul>
        </div>

        {/* Link button */}
        <button className=" bg-white border border-[#D5EA00]/10 px-6 py-3 rounded-xl text-[#0A0C11] flex items-center space-x-2">
          <span> My Tickets</span>
          <MoveRight />
        </button>
      </nav>
    </header>
  );
}
