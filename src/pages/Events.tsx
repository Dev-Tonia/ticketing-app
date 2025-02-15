import React from "react";
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
