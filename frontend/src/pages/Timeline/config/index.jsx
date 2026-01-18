import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export const fc_props = (isMobile) => ({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],

    initialView: isMobile ? 'timeGridDay' : 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: isMobile ? '' : 'dayGridMonth,timeGridWeek,timeGridDay',
    },

    buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
    },

    firstDay: 1,

    eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    },

    height: 'auto',
    dayMaxEvents: 2,

    nowIndicator: true,
})