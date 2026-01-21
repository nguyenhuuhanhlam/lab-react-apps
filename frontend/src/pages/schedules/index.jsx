import FullCalendar from "@fullcalendar/react";
import { useMediaQuery } from "react-responsive";

import { fc_props } from "./config";
import "./config/index.css";

const SchedulesPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const events = [
    {
      title: "A - Interview",
      start: "2026-01-17T09:00:00",
      end: "2026-01-17T11:00:00",
    },
    {
      title: "D - Conference",
      start: "2026-01-17T12:00:00",
      end: "2026-01-17T15:00:00",
    },
    {
      title: "B - Conference",
      start: "2026-01-17T11:00:00",
      end: "2026-01-18T14:00:00",
    },
    {
      title: "C - Conference",
      start: "2026-01-18T18:30:00",
      end: "2026-01-18T20:30:00",
    },
  ];

  return (
    <div className="fc-theme-dark rounded-md">
      <FullCalendar {...fc_props(isMobile)} events={events} />
    </div>
  );
};

export default SchedulesPage;
