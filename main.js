function updateClock(){


 var now = new Date();
 var formattedTime = now.toLocaleTimeString("en-US", { hour12: true });

document.getElementById("clock").innerHTML = formattedTime;



}




setInterval(updateClock, 1000);
updateClock();
