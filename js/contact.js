var btnEl = document.querySelector("button");
var anchorEl = document.getElementById("mailto");
var nameFieldEl = document.getElementById("name");
var emailFieldEl = document.getElementById("email");
var textAreaEl = document.getElementById("message");

/**
 * This function takes values from input fields and use them to setup email.
 * @param {*} event 
 */
function changeHandler(event){
    var name = nameFieldEl.value;
    var email = emailFieldEl.value;
    var message = textAreaEl.value;

    var body = encodeURIComponent("Name: "+name+"\n"+"Email: "+email+"\n"+"Message: "+message);
    var mail = encodeURIComponent("saad.yousafi87@gmail.com");

    anchorEl.setAttribute("href", "mailto:"+mail+"?Subject=Contact Us&body="+body);
}

// calling event listener on elements
nameFieldEl.addEventListener("change", changeHandler);
emailFieldEl.addEventListener("change", changeHandler);
textAreaEl.addEventListener("change", changeHandler);

// settings for maps to be display on
var map = L.map('map').setView([39.9382, -75.1723],13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// setting the marker for map by using longitude and latitude values
var marker = L.marker([39.9382, -75.1723]).addTo(map);