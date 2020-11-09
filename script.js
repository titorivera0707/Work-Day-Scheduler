var today =  new Date();
var hours = today.getHours();
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
console.log(hours)
console.log(9)
function initial() {
    for (var i = 0; i < workHours.length; i++) {
      $('.container').append("<div class='row'><div id='time-block' class='time-block col-2'><h3 class='hour hr" + i + "'>" + workHours[i] + "</h3></div><textarea class='description dscrptn" + i + " col-8'></textarea><button class='saveBtn Btn" + i + " col-2'>Save</button></<div>");
    }
        var description = document.querySelector(".description")
        var hour = document.querySelector(".hour")
        if (JSON.parse(localStorage.getItem(description.value))){
            $description.textContent(JSON.parse(localStorage.getItem(description.value)))
        }
        if (hours < "9"){
        $(".dscrptn0").addClass("future")
        }
        if (hours > "9"){
        $(".dscrptn0").addClass("past")
        }
        else{
        $(".dscrptn0").addClass("present")
        }
        if (hours < "10"){
        $(".dscrptn1").addClass("future")
        }
        if (hours > "10"){
        $(".dscrptn1").addClass("past")
            }
        else{
        $(".dscrptn1").addClass("present")
        }
        if (hours < "11"){
        $(".dscrptn2").addClass("future")
        }
        if (hours > "11"){
        $(".dscrptn2").addClass("past")
        }
        else{
        $(".dscrptn2").addClass("present")
        }
        if (hours < "12"){
        $(".dscrptn3").addClass("future")
        }
        if (hours > "12"){
        $(".dscrptn3").addClass("past")
            }
        else{
        $(".dscrptn3").addClass("present")
        }
        if (hours < "13"){
        $(".dscrptn4").addClass("future")
        }
        if (hours > "13"){
        $(".dscrptn4").addClass("past")
        }
        else{
        $(".dscrptn4").addClass("present")
        }
        if (hours < "14"){
        $(".dscrptn5").addClass("future")
        }
        if (hours > "14"){
        $(".dscrptn5").addClass("past")
            }
        else{
        $(".dscrptn5").addClass("present")
        }
        if (hours < "15"){
        $(".dscrptn6").addClass("future")
        }
        if (hours > "15"){
        $(".dscrptn6").addClass("past")
        }
        else{
        $(".dscrptn6").addClass("present")
        }
        if (hours < "16"){
        $(".dscrptn7").addClass("future")
        }
        if (hours > "16"){
        $(".dscrptn7").addClass("past")
            }
        else{
        $(".dscrptn7").addClass("present")
        }
        if (hours < "17"){
        $(".dscrptn8").addClass("future")
        }
        if (hours > "17"){
        $(".dscrptn8").addClass("past")
        }
        else{
        $(".dscrptn8").addClass("present")
        }
        $(".saveBtn").on("click", function()   {
        localStorage.setItem(JSON.stringify(hour.textContent), JSON.stringify(description.value))
        console.log(description.value);
        console.log(hour.textContent)
        console.log(typeof(hour))
});

}
var description = JSON.parse(localStorage.getItem("hello"))
initial()