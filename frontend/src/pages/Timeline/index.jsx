// import { useRef, useState } from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from "@fullcalendar/timegrid"
// import interactionPlugin from "@fullcalendar/interaction"

// import { Button } from 'antd'
// import {
//     IconArrowNarrowRight,
//     IconArrowNarrowLeft,
//     IconCalendarMonthFilled,
//     IconCalendarWeek,
//     IconHours24,
// } from '@tabler/icons-react'

// import './config/index.css'

// const Timeline = () => {

//     const calendarRef = useRef(null)
//     const [title, setTitle] = useState('')

//     const events = [
//         { title: 'Meeting A - Conference', start: '2026-01-17T09:00:00', end: '2026-01-17T11:00:00' },
//         { title: 'Meeting D - Conference', start: '2026-01-12T09:00:00', end: '2026-01-13T11:00:00' },
//         { title: 'Meeting B - Conference', start: '2026-01-17T11:00:00', end: '2026-01-18T14:00:00' },
//         { title: 'Meeting C - Conference', start: '2026-01-17T17:30:00', end: '2026-01-20T18:30:00' },
//     ]

//     const renderEventContent = (e) => {
//         const view_type = e.view.type
//         const show_time = e.isStart

//         return (
//             <div className="flex items-center gap-1 rounded-md px-1 w-full min-w-0 overflow-hidden">
//                 {show_time && <span className="text-neutral-200 font-normal px-1">{e.timeText}</span>}
//                 <span className="text-sky-200 font-normal truncate">{e.event.title}</span>
//             </div>
//         )
//     }

//     const updateTitle = () => {
//         const api = calendarRef.current?.getApi()
//         if (api) setTitle(api.view.title)
//     }

//     return (
//         <div className='flex flex-col gap-2 items-center'>

//             <div className='flex gap-2 items-center justify-between'>
//                 <div className='flex gap-2 items-center'>
//                     <Button size='small'
//                         variant='solid'
//                         type='primary'
//                         onClick={() => {
//                             calendarRef.current.getApi().prev()
//                             updateTitle()
//                         }}
//                         icon={<IconArrowNarrowLeft size={20} className='pt-1' />}
//                         shape='circle'
//                     />
//                     <Button size='small'
//                         variant='solid'
//                         type='primary'
//                         onClick={() => {
//                             calendarRef.current.getApi().next()
//                             updateTitle()
//                         }}
//                         icon={<IconArrowNarrowRight size={20} className='pt-1' />}
//                         shape='circle'
//                     />
//                 </div>

//                 <span className='text-sm font-semibold'>{title}</span>

//                 <div className='flex gap-2 items-center'>
//                     <Button size='small'
//                         variant='solid'
//                         color='cyan'
//                         type='primary'
//                         onClick={() => {
//                             calendarRef.current?.getApi().changeView("dayGridMonth")
//                             updateTitle()
//                         }}
//                         icon={<IconCalendarMonthFilled size={20} className='pt-1' />}
//                         shape='circle'
//                     />

//                     <Button size='small'
//                         variant='solid'
//                         type='primary'
//                         onClick={() => {
//                             calendarRef.current?.getApi().changeView("timeGridWeek")
//                             updateTitle()
//                         }}
//                         icon={<IconCalendarWeek size={20} className='pt-1' />}
//                         shape='circle'
//                     />

//                     <Button size='small'
//                         variant='solid'
//                         color='blue'
//                         type='primary'
//                         onClick={() => {
//                             calendarRef.current?.getApi().changeView("timeGridDay")
//                             updateTitle()
//                         }}
//                         icon={<IconHours24 size={20} className='pt-1' />}
//                         shape='circle'
//                     />
//                 </div>
//             </div>

//             <div className="w-[720px]">
//                 <FullCalendar
//                     ref={calendarRef}
//                     plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                     events={events}
//                     eventContent={renderEventContent}
//                     firstDay={1}
//                     headerToolbar={false}
//                     eventTimeFormat={{
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         hour12: false,
//                     }}
//                     nowIndicator={true}
//                     aspectRatio={1.35}
//                     dayMaxEventRows={2}
//                 />
//             </div>
//         </div>
//     )
// }

// export default Timeline


import { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'

import { fc_props } from './config'
import './config/index.css'

const Timeline = () => {
    const events = [
        { title: 'A - Interview', start: '2026-01-17T09:00:00', end: '2026-01-17T11:00:00' },
        { title: 'D - Conference', start: '2026-01-17T12:00:00', end: '2026-01-17T15:00:00' },
        { title: 'B - Conference', start: '2026-01-17T11:00:00', end: '2026-01-17T14:00:00' },
        { title: 'C - Conference', start: '2026-01-18T18:30:00', end: '2026-01-18T20:30:00' },
    ]

    return (
        <div className='fc-theme-dark rounded-md'>
            <FullCalendar
                {...fc_props}
                events={events}
            />
        </div>
    )
}

export default Timeline