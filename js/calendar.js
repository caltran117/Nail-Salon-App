
var btnEl = document.getElementById("mailto");
var nameFieldEl = document.getElementById("name");
var selectFieldEl = document.getElementById("service");
var dateEl = document.getElementById("date");
var timeEl = document.getElementById("time");
var calendarArray = [];
var events = [];

// This function is to setup calendar
function draw(data){
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    height: 400,
    allDaySlot: false,
    weekends: false,
    businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '09:00',
        endTime: '18:00',
    },
    events: data
  });
  calendar.render();
}

// this function is to fetch data from local storage
function getData(){
  let retrived = localStorage.getItem("events");
  events = JSON.parse(retrived);
  if(events == null){
    events = [];
  }
}

// function call to getData() function
getData();

// function call to Draw() function to display it in browser with events.
draw(events.map(obj =>{
  console.log(localStorage.getItem(events[0].title));
  return {
    title: obj.title,
    start: obj.start,
  }
}));

// event listener for submit button event.
btnEl.addEventListener("click", function(event){
  var name = nameFieldEl.value;
  var date = dateEl.value;
  var time = timeEl.value;

  calendarArray.push({
    title: name,
    start: date+"T"+time+":00"
  });
  localStorage.setItem("events", JSON.stringify(calendarArray));
  
});