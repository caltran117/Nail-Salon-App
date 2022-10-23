var btnEl = document.querySelector("button");
var anchorEl = document.getElementById("mailto");
var nameFieldEl = document.getElementById("name");
var emailFieldEl = document.getElementById("email");
var textAreaEl = document.getElementById("message");

btnEl.addEventListener("click", function(event){
    event.preventDefault();
    var name = nameFieldEl.value;
    var email = emailFieldEl.value;
    var message = textAreaEl.value;

    var body = "Name: "+name+"\n"+"Email: "+email+"\n"+"Message: "+message;
    var mail = "saad.yousafi87@gmail.com";

    anchorEl.setAttribute("href", "mailto:"+mail+"?subject=contact-us&body="+body);
});

var map = L.map('map').setView([39.95605, -75.21207],13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([39.95605, -75.21207]).addTo(map);