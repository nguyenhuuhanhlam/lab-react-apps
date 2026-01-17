import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export const fc_props = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],

    initialView: "dayGridMonth",
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    firstDay: 1,

    eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    },

    dayMaxEventRows: 2,

    nowIndicator: true,
}