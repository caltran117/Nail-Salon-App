
var anchorEl = document.getElementById("mailto");
var nameFieldEl = document.getElementById("name");
var selectFieldEl = document.getElementById("service");
var phoneEl = document.getElementById("phone");
var dateEl = document.getElementById("date");
var timeEl = document.getElementById("time");
var calendarArray = [];
var events = [];

// This function is to setup calendar
function draw(){
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
    displayEventTime: false, // don't show the time column in list view
    googleCalendarApiKey: 'AIzaSyCWWne01OTyVCO8uVwBFAnvOUO-JwFp4XM',
    events: '249a38768404e36b6a17ca77d8b79006060f38c71274ef6f8da82aebcdd603d1@group.calendar.google.com',

    eventClick: function(arg) {

      // opens events in a popup window
      window.open(arg.event.url, '_blank', 'width=700,height=600');

      // prevents current tab from navigating
      arg.jsEvent.preventDefault();
    }
  });
  calendar.render();
}

// this function takes input values and setup email
function changeHandler(event){
  var name = nameFieldEl.value;
  var service = selectFieldEl.value;
  var phone = phoneEl.value;
  var date = dateEl.value;
  var time = timeEl.value;

  var body = encodeURIComponent("Name: "+name+"\n"+"Service: "+service+"\n"+"Phone: "+phone+"\n"+"Date: "+date+"\n"+"Time: "+time);
  var mail = encodeURIComponent("saad.yousafi87@gmail.com");

  anchorEl.setAttribute("href", "mailto:"+mail+"?Subject=Appointment Schedule&body="+body);
}


// function call to display calendar in browser with events.
draw();

//calling event listener on elements
nameFieldEl.addEventListener("change", changeHandler);
selectFieldEl.addEventListener("change", changeHandler);
phoneEl.addEventListener("change", changeHandler);
dateEl.addEventListener("change", changeHandler);
timeEl.addEventListener("change", changeHandler);

