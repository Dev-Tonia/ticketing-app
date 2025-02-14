import React from "react";
interface TicketTypeCardProps {
  data: {
    price: number | string;
    description: string;
    quantity: string;
  };
}
export default function TicketTypeCard({ data }: TicketTypeCardProps) {
  return (
    <div className="flex justify-between items-start p-4 rounded-xl hover:bg-[#12464E] border-2 border-[#197686] w-full transition-all duration-300 ease-in-out cursor-pointer group">
      <div className="flex flex-col gap-1 text-lightgrey group-hover:text-white">
        <p className="font-semibold text-2xl text-white">{data.price}</p>
        <h4 className="uppercase text-[#FAFAFA]">{data.description}</h4>
        <p className="text-sm text-[#D9D9D9]">{data.quantity} </p>
      </div>
    </div>
  );
}
