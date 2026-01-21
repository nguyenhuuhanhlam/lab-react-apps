import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";

export const fc_props = (isMobile) => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin],

  initialView: isMobile ? "timeGridDay" : "dayGridMonth",

  titleFormat: (arg) => {
    const startMonth = arg.start.month; // 0-based
    const endMonth = arg.end.month; // 0-based
    const startYear = arg.start.year;
    const endYear = arg.end.year;

    const m1 = String(startMonth + 1).padStart(2, "0");
    const m2 = String(endMonth + 1).padStart(2, "0");

    // Nếu range nằm trong cùng năm:
    if (startYear === endYear) {
      // Nếu chỉ 1 tháng (dayGridMonth)
      if (startMonth === endMonth) return `${m1}/${startYear}`;

      // Nếu nhiều tháng (twoMonth)
      return `${m1} ${m2}/${startYear}`; // ví dụ: 01 02/2026
    }

    // Trường hợp qua năm (vd: 12/2026 -> 01/2027)
    if (startMonth === endMonth) return `${m1}/${startYear}`;

    return `${m1}/${startYear} – ${m2}/${endYear}`;
  },

  views: {
    twoMonth: {
      type: "multiMonthYear",
      duration: { months: 2 },
      multiMonthMaxColumns: 2,
    },
  },
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: isMobile ? "" : "twoMonth dayGridMonth,timeGridWeek,timeGridDay",
  },

  buttonText: {
    today: "Today",
    month: "Month",
    week: "Week",
    day: "Day",
    twoMonth: "2 Months",
  },

  firstDay: 1,

  eventTimeFormat: {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  },

  height: "auto",
  dayMaxEvents: 2,

  nowIndicator: true,
});
