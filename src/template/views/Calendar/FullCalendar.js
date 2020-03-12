import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import './FullCalendar.scss';
let CalendarComponent;
export default function FullCalendar(props) {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  useEffect(() => {
    CalendarComponent = dynamic({
      modules: () => ({
        calendar: import('@fullcalendar/react'),
        dayGridPlugin: import('@fullcalendar/daygrid'),
        timeGridPlugin: import('@fullcalendar/timegrid'),
        interactionPlugin: import('@fullcalendar/interaction'),
        listPlugin: import('@fullcalendar/list'),
        timelinePlugin: import('@fullcalendar/timeline'),
      }),
      render: (props, { calendar: Calendar, ...plugins }) => (
        <Calendar
          {...props}
          plugins={Object.values(plugins)}
          ref={props.myRef}
        />
      ),
      ssr: false,
    });
    setCalendarLoaded(true);
  });
  let showCalendar = props => {
    if (!calendarLoaded) return <div>Loading ...</div>;
    return <CalendarComponent {...props} />;
  };
  return <div>{showCalendar(props)}</div>;
}
