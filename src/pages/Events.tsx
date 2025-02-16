import React from "react";
import EventCard from "../components/events/EventCard";
import TicketSelection from "../components/events/TicketSelection";
import AttendeeDetail from "../components/events/AttendeeDetail";
import TicketReady from "../components/events/TicketReady";

export default function Events() {
  return (
    <section className="wrapper ">
      <EventCard>
        <TicketSelection />
        <AttendeeDetail />
        <TicketReady />
      </EventCard>
    </section>
  );
}
