import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"



const events = [
    { title: 'Meeting', start: new Date() }
]


const Timeline = () => {

    const renderEventContent = (eventInfo) => {
        return (
            <div>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                events={events}
                eventContent={renderEventContent}
                height={'auto'}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
            />
        </div>
    );
};

export default Timeline;