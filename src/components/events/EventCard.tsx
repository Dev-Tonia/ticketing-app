import React from "react";

export default function EventCard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className=" flex items-center justify-center py-12">
      <div className=" rounded-[40px] bg-[#041E23] p-12 border border-[#0E464F] z-10 ">
        {/* card header */}
        <div className=" mb-8">
          <div className=" pb-3 flex items-center justify-between">
            <h6 className=" text-[32px] text-white ">Ticket Selection</h6>
            <p className=" font-Roboto text-[#fafafa]">Step 1/3</p>
          </div>
          <div className=" py-1 bg-[#0E464F]  rounded-[5px]" />
        </div>

        {children}
      </div>
    </div>
  );
}
