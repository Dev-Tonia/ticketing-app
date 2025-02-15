import React from "react";

export default function Elapses() {
  return (
    <>
      {/* top left */}
      <div className="absolute mt-[-16px] top-0 -left-[16.8px] rounded-full border-transparent  w-8 h-8 bg-[#041E23] rotate-45 border border-r-[#24A0B5]"></div>
      {/* top right */}
      <div className="absolute  mt-[-16px] top-0 -right-[16.8px] w-8 h-8 bg-[#041E23] border-transparent rounded-full -rotate-45 border border-l-[#24A0B5]"></div>
      {/* bottom left */}
      <div className="absolute bottom-0  mb-[-16px] -left-[16.8px] w-8 h-8 bg-[#041E23] rotate-45 rounded-full border border-transparent border-t-[#24A0B5]"></div>
      {/* bottom right */}
      <div className="absolute bottom-0 mb-[-16px] -right-[16.8px] -rotate-45 w-8 h-8 bg-[#041E23] rounded-full border border-transparent border-t-[#24A0B5]"></div>
      {/* cennter left */}
      <div className="absolute top-[50%] left-0 transform  rotate-45 rounded-full border-b-transparent border-l-transparent -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#041E23]  border border-[#24A0B5]"></div>
      {/* center right */}
      <div className="absolute top-[50%] transform -translate-y-1/2 translate-x-1/2 right-0 w-8 h-8 bg-[#041E23]  rounded-full  border-2  border-t-transparent border-r-transparent   rotate-45 border-[#24A0B5]"></div>
    </>
  );
}
