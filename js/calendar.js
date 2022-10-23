// 2 api, 1 calendar & map -- calendly, address of location on map



document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    // plugins: ['googleCalendarPlugin'],
    // googleCalendarApiKey: 'AIzaSyCWWne01OTyVCO8uVwBFAnvOUO-JwFp4XM',
    // events: {
    //     googleCalendarId: '473755118831-8ql0jhu2banfeovusqbquck44o12gdvi.apps.googleusercontent.com'
    // },
    initialView: 'timeGridWeek',
    height: 400,
    allDaySlot: false,
    weekends: false,
    businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '09:00',
        endTime: '18:00',
    },
  });
  calendar.render();
});