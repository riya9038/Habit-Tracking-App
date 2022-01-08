import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Habit(){
    return (
        <div className="calender">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"

            headerToolbar = {{
                start: 'title',
                center: 'dayGridMonth,timeGridWeek,timeGridDay',   
                end: 'today prev,next'
              }}
          />
        </div>
      );
}
export default Habit;