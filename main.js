function updateClock(){
var now = new Date();
var hours = now.getHours();
var mins = now.getMinutes();
var secs = now.getSeconds();
var ampm = now.toLocaleTimeString('en-US', {hour12: true});

const formattedTime = hours + ":" + mins + ":" + secs + " " + ampm;

document.getElementById("clock").innerHTML = formattedTime;



}
setInterval(updateClock, 1000);
updateClock();
