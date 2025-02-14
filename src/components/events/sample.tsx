import React from "react";

const Sample = () => {
  return (
    <div className="relative w-full max-w-md mx-auto p-8 text-white text-center rounded-lg overflow-hidden shadow-xl">
      {/* Radial gradient background (rotated -95°) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20%, #24A0B5 20%, #24A0B5 100%)",
          transform: "rotate(-95deg)",
          transformOrigin: "center center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0C11] opacity-80" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold tracking-wide">
          Techember Fest <span className="text-4xl">’25</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base">
          Join us for an unforgettable experience at <br />
          <strong>[Event Name]</strong>! Secure your spot now.
        </p>
        <p className="mt-6 flex items-center justify-center space-x-2 text-sm sm:text-base">
          <span role="img" aria-label="Location">
            📍
          </span>
          <span>[Event Location]</span>
          <span className="text-gray-300">||</span>
          <span>March 15, 2025</span>
          <span className="text-gray-300">|</span>
          <span>7:00 PM</span>
        </p>
      </div>
    </div>
  );
};

export default Sample;
