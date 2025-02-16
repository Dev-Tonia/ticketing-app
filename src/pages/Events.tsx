import React, { useState } from "react";
import EventCard from "../components/events/EventCard";
import TicketSelection from "../components/events/TicketSelection";
import AttendeeDetail from "../components/events/AttendeeDetail";
import TicketReady from "../components/events/TicketReady";

export default function Events() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const eventForm = [
    {
      title: "Ticket Selection",
      component: <TicketSelection nextStep={nextStep} />,
    },
    {
      title: "Attendee Detail",
      component: <AttendeeDetail nextStep={nextStep} preStep={prevStep} />,
    },
    {
      title: "Ticket Ready",
      component: <TicketReady />,
    },
  ];

  return (
    <section className="wrapper z-10 ">
      <EventCard step={step} title={eventForm[step - 1].title}>
        {eventForm[step - 1].component}
      </EventCard>
    </section>
  );
}
