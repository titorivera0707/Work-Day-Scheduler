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
document.getElementById("currentDay").innerHTML = d + ", " + m + " " + dt 

function initial(){
    for (var i = 0; i < 9; i++) {
    
        $(".container").append("<div class='row'></<div>");
    }  
        // var number = 0
        // for (var i = 0; i < 5; i++) {
        // number++
        //}
        $(".row").append("<div id='time-block' class='time-block col-2'></div>")
        $(".time-block").append("<h3 class='hour" + i + "'"+ "></h3>")
        $(".row").append ("<textarea class='description col-8'></textarea>")
        $(".row").append("<button class='saveBtn col-2'></button>")
        var time = document.querySelector(".hour");
        var description = document.querySelector(".description");
        var description = document.querySelector(".description")
        var time = document.querySelector(".time-block")
        $(".saveBtn").on("click", function() {
            console.log(time.textContent)
            console.log(description.value)
            console.log("hello")
            localStorage.setItem(time.textContent, JSON.stringify(description.value));
    })
        var time = JSON.parse(localStorage.getItem("hello"))
}



var description = document.querySelector(".description")

var time = document.querySelector(".time-block")
$(".saveBtn").on("click", function() {
    console.log(time.textContent)
    console.log(description.value)
    console.log("hello" )
    localStorage.setItem(time.textContent, JSON.stringify(description.value));
})
initial()