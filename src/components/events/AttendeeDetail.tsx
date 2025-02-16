import React from "react";
import FileUpload from "./FileUpload";
interface Props {
  nextStep: () => void;
  preStep: () => void;
}
export default function AttendeeDetail({ nextStep, preStep }: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Prevent the default form submission behavior
    nextStep(); // Call the nextStep function
    // console.log("hello word of react ");
  }
  return (
    <form
      className=" bg-[#08252B] border border-[#0E464F] p-6 rounded-[32px] text-[#FAFAFA] "
      onSubmit={handleSubmit}
    >
      <div className=" bg-[#052228] border border-[#07373F] rounded-3xl pt-6 px-6 pb-12 relative">
        <h6 className="  font-Roboto mb-3 ">Upload Profile Picture</h6>
        <div className="bg-black/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-[150px] w-[90%] mx-auto" />
        <FileUpload />
      </div>
      <hr className=" h-1 bg-[#07373F]  my-8 border-none" />

      {/* user input details */}
      <div className=" font-Roboto">
        <div className="  my-8 flex flex-col">
          <label htmlFor="user-name" className=" mb-3">
            Enter your name
          </label>
          <input
            id="user-name"
            name="user-name"
            type="text"
            className=" bg-transparent  border border-[#07373F] p-3 rounded-2xl focus:outline-none focus:ring-0 "
            required
          />
        </div>
        <div className="  my-8 flex flex-col">
          <label htmlFor="email" className=" mb-3">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className=" bg-transparent rounded-2xl border border-[#07373F] p-3  focus:outline-none focus:ring-0 placeholder:text-gray-300"
            placeholder=" hello@example.com"
          />
        </div>
        <div className="  my-8 flex flex-col">
          <label htmlFor="note" className=" mb-3">
            Special Require?
          </label>
          <textarea
            id="note"
            name="note"
            rows={5}
            required
            className=" bg-transparent rounded-2xl border border-[#07373F] p-3  focus:outline-none focus:ring-0 "
          ></textarea>
        </div>
      </div>

      {/* button section */}

      <div className="flex flex-col-reverse md:flex-row gap-3 mt-8 font-Nanum">
        <button
          type="button"
          onClick={preStep}
          className="px-6 w-full py-3 rounded-lg border border-[#24A0B5] text-[#24A0B5] hover:bg-primary/40 transition-colors whitespace-nowrap"
        >
          Back
        </button>
        <button
          className="px-6 w-full py-3  rounded-lg bg-[#24A0B5]  text-white transition-colors whitespace-nowrap"
          type="submit"
        >
          Get Free Ticket
        </button>
      </div>
    </form>
  );
}
/**
 



display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 556px;
height: 80px;


flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

*/
