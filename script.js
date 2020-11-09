var today =  new Date();
var hour = today.getHours();
var day = today.getDay();
var date = today.getDate();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
var month = today.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = (days[day]);
var m = (months[month]);
var dt = date
var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
document.getElementById("currentDay").innerHTML = d + ", " + m + " " + dt 

function initial() {
    for (var i = 0; i < workHours.length; i++) {
      $('.container').append("<div class='row'><div id='time-block' class='time-block col-2'><h3 class='hour'>" + workHours[i] + "</h3></div><textarea class='description col-8'></textarea><button class='saveBtn Btn" + i + " col-2'>Save</button></<div>");
    }
        var description = document.querySelector(".description")
        var hour = document.querySelector(".hour")
        $(".saveBtn").on("click", function()   {
        localStorage.setItem(hour.value, JSON.stringify(description.value))
        console.log(description.value);
        console.log(hour.textContent)
        console.log("Btn0")
});
localStorage.getItem(workHours[i])
}
var description = JSON.parse(localStorage.getItem("hello"))
initial()