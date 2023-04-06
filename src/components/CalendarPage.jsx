import React from 'react';
import CalendarEvent from './CalendarEvent';
import importantDates from '../data/importantDates'



function CalendarPage() {
    return (
      <div>
        <h1>Calendrier</h1>
        <p>Cliquez sur un événement pour afficher plus de détails.</p>
        {importantDates.map((event, index) => (
          <CalendarEvent key={index} event={event} />
        ))}
      </div>
    );
  }
  export default CalendarPage;
  