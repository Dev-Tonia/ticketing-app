import React from "react";
import TicketSelection from "../components/events/ticketSelection";
import EventCard from "../components/events/EventCard";

export default function Events() {
  return (
    <section className="wrapper ">
      <EventCard>
        <TicketSelection />
      </EventCard>
    </section>
  );
}
