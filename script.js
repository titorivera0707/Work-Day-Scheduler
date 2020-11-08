var today =  new Date();
var hour = today.getHours();
var day = today.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
var month = today.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = (days[day]);
var m = (months[month]);
var dt = day
document.getElementById("currentDay").innerHTML = d + ", " + m + " " + dt 

function initial(){
    for (var i = 0; i < 9; i++) {
    
        $(".container").append("<div class='row'></<div>");
    }    
        var number = 0
        for (var i = 0; i < 5; i++) {
        number++
        }
        $(".row").append("<div id='time-block" + "'" + " class='time-block col-2'></div>")
        $(".time-block").append("<h3 class='hour'>" + number +"</h3>")
        $(".row").append ("<textarea class='description col-8'></textarea>")
        $(".row").append("<button class='saveBtn col-2'></button>")
        
        
        var description = document.querySelector(".description")
        var time = document.querySelector(".time-block")
        $(".saveBtn").on("click", function() {
            console.log(time.textContent)
            console.log(description.value)
            console.log("hello" )
            localStorage.setItem(time.textContent, JSON.stringify(description.value));
    })
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

var test = JSON.parse(localStorage.getItem("9am"))
console.log(test)

// var description2 = document.querySelector(".description2")

// var time2 = document.querySelector(".time-block2")


// $(".saveBtn2").on("click", function() {
//     console.log(time2.textContent)
//     console.log(description2.value)
//     console.log("hello")
//     localStorage.setItem(time2.textContent, JSON.stringify(description.value));
// })


