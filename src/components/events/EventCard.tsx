import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  step: number;
}

export default function EventCard({ children, title, step }: Props) {
  return (
    <div className=" max-w-2xl mx-auto z-10 py-12 ">
      <div className=" rounded-[40px] bg-[#041E23] p-6 md:p-9 lg:p-12 border border-[#0E464F] z-[100]  ">
        {/* card header */}
        <div className=" mb-8">
          <div className=" pb-3 flex items-center justify-between">
            <h6 className=" text-[32px] text-white ">{title}</h6>
            <p className=" font-Roboto text-[#fafafa]">{`Step ${step}/3`}</p>
          </div>
          <div className=" py-1 bg-[#0E464F]  rounded-[5px]" />
        </div>

        {children}
      </div>
    </div>
  );
}
