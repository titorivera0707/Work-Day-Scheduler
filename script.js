// var currentDay = document.querySelector("#currentDay");
var today =  new Date();
var day = today.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
var month = today.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = (days[day]);
var m = (months[month]);
var dt = day
document.getElementById("currentDay").innerHTML = d + ", " + m + " " + dt 

