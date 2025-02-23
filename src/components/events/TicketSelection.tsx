import React, { useState } from "react";
import TicketTypeCard from "./TicketTypeCard";
interface Props {
  nextStep: () => void;
}
export default function TicketSelection({ nextStep }: Props) {
  // form data
  const [formData, setFormData] = useState({
    ticketType: "",
    numberOfTickets: "",
  });
  // set error state
  const [error, setError] = useState({
    ticketType: false,
    numberOfTickets: false,
  });
  // get the card clicked
  function selectTicketType(type: string) {
    setFormData({ ...formData, ticketType: type });
  }

  // handle input change
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFormData({ ...formData, numberOfTickets: e.target.value });
    console.log(formData);
  }

  // handle form submit
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Prevent the default form submission behavior

    // validation

    if (formData.ticketType.trim() === "") {
      setError({ ...error, ticketType: true });
      return;
    }

    if (formData.numberOfTickets.trim() === "") {
      setError({ ...error, numberOfTickets: true });
      return;
    }
    nextStep();
  }

  // rest the form data
  function resetFormData() {
    setFormData({ ticketType: "", numberOfTickets: "" });
    setError({ ticketType: false, numberOfTickets: false });
  }

  // ticket types
  const ticketTypes = [
    { price: "Free", description: " Regular Access", quantity: "08/50" },
    { price: "$50", description: "VIP Access", quantity: "08/50" },
    { price: "$150", description: "VVIP Access", quantity: "08/50" },
  ];

  return (
    <form
      className=" bg-[#08252B] border border-[#0E464F] z-10 p-6 rounded-[32px] text-[#FAFAFA]"
      onSubmit={handleSubmit}
    >
      {/* form header */}
      <div className="relative overflow-hidden border-2 border-top-0  border-[#0E464F]  bg-[#0A0C11]/10 rounded-3xl p-6">
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-[radial-gradient(ellipse_at_top_left,rgba(36,160,181,0.3)_0%,rgba(36,160,181,0)_70%)]"></div>
        <div className="flex flex-col gap-3 mx-auto text-center justify-center items-center ">
          <h2 className="text-4xl  md:text-6xl font-RoadRage">
            Techember Fest "25
          </h2>
          <p className="sm:w-2/3 font-Roboto text-sm md:text-base">
            Join us for an unforgettable experience at TechFest! Secure your
            spot now.
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center font-Roboto">
            <p>📍 Lagos, Nigeria</p>
            <p className="hidden md:block">||</p>
            <div className="flex gap-1 items-center">
              <p>March 15, 2025</p>
              <p>|</p>
              <p>7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <hr className=" h-1 bg-[#07373F]  my-8 border-none" />
      {/* select ticket type */}
      <div className="font-Roboto">
        <h3 className="mb-3">Select Ticket Type:</h3>
        <div className="p-4 rounded-3xl border border-[#07373F] bg-[#052228]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ticketTypes.map((ticketType) => (
              <TicketTypeCard
                data={{
                  price: ticketType.price,
                  description: ticketType.description,
                  quantity: ticketType.quantity,
                }}
                onSelect={() => selectTicketType(ticketType.description)}
                isSelected={formData.ticketType}
                key={ticketType.description}
              />
            ))}
          </div>
          {error.ticketType && (
            <p className="text-red-500">Please select a ticket type</p>
          )}
        </div>
      </div>

      {/* select number of ticket */}

      <div className="font-Roboto my-8">
        <label className="mb-3 block" htmlFor="number-of-ticket">
          Number of Tickets
        </label>
        <select
          onChange={handleChange}
          name="number-of-ticket"
          className=" p-3 rounded-xl w-full bg-[#08252B]  border border-[#07373F] text-white focus:outline-none focus:ring-0"
          id=""
        >
          <option value="">Select Number of Tickets</option>
          <option value="1" className="">
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {error.numberOfTickets && (
          <p className="text-red-500">Please select a number of tickets</p>
        )}
      </div>

      {/* button section */}

      <div className="flex flex-col-reverse md:flex-row gap-3 mt-8 font-Nanum z-30">
        <button
          onClick={resetFormData}
          className="px-6 w-full py-3 rounded-lg border border-[#24A0B5] cursor-pointer text-[#24A0B5] hover:bg-primary/40 transition-colors whitespace-nowrap"
        >
          Cancel
        </button>
        <button
          className="px-6 w-full py-3 rounded-lg bg-[#24A0B5] cursor-pointer  text-white transition-colors whitespace-nowrap"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}
