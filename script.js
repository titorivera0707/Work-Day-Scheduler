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
workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
document.getElementById("currentDay").innerHTML = d + ", " + m + " " + dt 
function initial(){
    for (var i = 0; i < 9; i++) {
        $(".container").append("<div class='row'></<div>");
    }  
        $(".row").append("<div id='time-block' class='time-block col-2'><textarea class='userText'></textarea></div>")
        $(".time-block").append("<h3 class='hour'></h3>")
        $(".row").append ("<textarea class='description col-8'></textarea>")
        $(".row").append("<button class='saveBtn col-2'></button>")
        // document.querySelector(".hour").innerHTML = "hello"
        var description = document.querySelector(".description")
        var hour = document.querySelector(".hour")
        var userText = document.querySelector(".userText")
        $(".saveBtn").on("click", function()   {
            localStorage.setItem(userText.value, JSON.stringify(description.value))
            console.log(description.value);
            console.log(hour.textContent)

    })
}

var description = JSON.parse(localStorage.getItem("hello"))
initial()