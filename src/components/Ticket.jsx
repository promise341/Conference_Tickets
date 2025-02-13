import Image from "next/image";
import React from "react";
import { content } from "@/Js/content";

const EventTicket = ({ ticketDetails, isStep }) => {
  if (!ticketDetails) return null;

  const bgColor = isStep ? "bg-greentwo" : "bg-[#02191D]";

  return (
    <div className="w-full max-w-sm mx-auto font-roboto">
      {/* Ticket Container */}
      <div className="relative bg-[#072C31] p-5 text-white border-2 border-greenone rounded-[20px] border-b-0">
        {/* Background Gradient Effect */}
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-[radial-gradient(ellipse_at_top_center,rgba(36,160,181,0.3)_0%,rgba(36,160,181,0)_70%)]" />

        {/* Decorative Top Corners */}
        {["left", "right"].map((side) => (
          <div key={side} className={`absolute -top-[2px] -${side}-[2px] w-8 h-8`}>
            <div className="absolute w-full h-full bg-[#072C31] rounded-full" />
            <div
              className={`absolute w-[28px] h-[25px] -top-[2px] -${side}-[2px] ${bgColor} rounded-2xl border-b-2 border-greenone ${
                side === "left" ? "-rotate-45 border-r-0" : "rotate-45 border-l-0"
              }`}
            />
          </div>
        ))}

        {/* Ticket Content */}
        <div className="relative z-20 border-2 border-greenone p-4 rounded-[16px] space-y-5">
          {/* Event Title and Details */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-roadrage mb-3">
              {content.title}
            </h1>
            <div className="space-y-1">
              <p className="text-sm sm:text-base flex justify-center items-center gap-2">
                <span className="text-cyan-400 hidden sm:block">📍</span>
                {content.location}
              </p>
              <p className="text-sm sm:text-base flex justify-center items-center gap-2">
                <span className="text-cyan-400 hidden sm:block">📅</span>
                {content.date} | {content.time}
              </p>
            </div>
          </div>

          {/* User Profile Image */}
          <div className="flex justify-center mb-3">
            <div className="w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[120px] md:h-[140px] border-4 border-greenone/50 rounded-xl overflow-hidden">
              <Image
                src={ticketDetails.photo}
                alt="Profile"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Ticket Information */}
          <div className="grid grid-cols-2 gap-4 bg-[#08343C] border-2 border-[#133D44] rounded-lg p-4 text-sm sm:text-base">
            {[
              { label: "Name", value: ticketDetails.name },
              { label: "Email", value: ticketDetails.email },
              { label: "Ticket Type", value: ticketDetails.ticketType },
              { label: "Ticket for", value: ticketDetails.numberOfTickets },
              { label: "Special request?", value: ticketDetails.specialRequest, fullWidth: true },
            ].map(({ label, value, fullWidth }, index) => (
              <div
                key={index}
                className={`space-y-1 ${fullWidth ? "col-span-2" : "col-span-1"} ${
                  index < 2 ? "border-b border-[#12464E] pb-2" : "border-t border-[#12464E] pt-2"
                } ${index % 2 === 0 && !fullWidth ? "pr-4 border-r border-[#12464E]" : "pl-4"}`}
              >
                <label className="text-white text-opacity-30 text-xs sm:text-sm">{label}</label>
                <p className="text-white font-bold truncate overflow-hidden">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Corners */}
        {["left", "right"].map((side) => (
          <div key={side} className={`absolute -bottom-[2px] -${side}-[2px] w-8 h-4 overflow-hidden`}>
            <div className={`absolute w-8 h-8 -bottom-4 -${side}-0 ${bgColor} rounded-full border-2 border-greenone`} />
            <div className={`absolute w-8 h-8 -bottom-5 -${side}-2 ${bgColor} rounded-full`} />
          </div>
        ))}
      </div>

      {/* Tear Line Decoration */}
      <div className="mx-8 bg-[#072C31] flex justify-between gap-[2.42px] rounded-lg overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-4 h-2 rounded-[14.96px] border-2 border-greenone bg-[#02191D]" />
        ))}
      </div>

      {/* Bottom Section - Barcode */}
      <div className="relative bg-[#072C31] p-6 border-2 border-greenone rounded-[20px] border-t-0">
        {/* Background Gradient Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[radial-gradient(ellipse_at_bottom_center,rgba(36,160,181,0.3)_0%,rgba(36,160,181,0)_70%)]" />

        {/* Decorative Top Corners */}
        {["left", "right"].map((side) => (
          <div key={side} className={`absolute -top-[2px] -${side}-[2px] w-8 h-4 overflow-hidden`}>
            <div className={`absolute w-8 h-8 -top-4 -${side}-0 ${bgColor} rounded-full border-2 border-greenone`} />
            <div className={`absolute w-8 h-8 -top-5 -${side}-2 ${bgColor} rounded-full`} />
          </div>
        ))}

        {/* Barcode Image */}
        <div className="flex justify-center">
          <Image src="/barcode.svg" alt="barcode" width={336} height={68} />
        </div>

        {/* Decorative Bottom Corners */}
        {["left", "right"].map((side) => (
          <div key={side} className={`absolute -bottom-[2px] -${side}-[2px] w-8 h-8`}>
            <div className="absolute w-full h-full bg-[#072C31] rounded-full" />
            <div
              className={`absolute w-[28px] h-[25px] -bottom-[2px] -${side}-[2px] ${bgColor} rounded-2xl border-t-2 border-greenone ${
                side === "left" ? "rotate-45 border-l-0" : "-rotate-45 border-r-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTicket;
