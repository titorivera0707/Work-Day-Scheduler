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
      $('.container').append("<div class='row'><div id='time-block' class='time-block col-2'><h3 class='hour hr" + i + "'>" + workHours[i] + "</h3></div><textarea class='description dscrptn" + i + " col-8'></textarea><button class='saveBtn Btn" + i + " col-2'>Save</button></<div>");
    }
        var description = document.querySelector(".description")
        var hour = document.querySelector(".hour")
        if (JSON.parse(localStorage.getItem(description.value))){
            $description.textContent(JSON.parse(localStorage.getItem(description.value)))
        }
        if (hour === "9"){
            $(".dscrptn0").addClass("present")
        }
        if (hour < "9"){
            $(".dscrptn0").addClass("future")
        }else{
            $(".dscrptn0").addClass("past")
        }
        if (hour === "10"){
            $(".dscrptn1").addClass("present")
        }
        if (hour < "10"){
            $(".dscrptn1").addClass("future")
        }else{
            $(".dscrptn1").addClass("past")
        }
        if (hour === "11"){
            $(".dscrptn2").addClass("present")
        }
        if (hour < "11"){
            $(".dscrptn2").addClass("future")
        }else{
            $(".dscrptn2").addClass("past")
        }
        if (hour === "12"){
            $(".dscrptn3").addClass("present")
        }
        if (hour < "12"){
            $(".dscrptn3").addClass("future")
        }else{
            $(".dscrptn3").addClass("past")
        }
        if (hour === "13"){
            $(".dscrptn4").addClass("present")
        }
        if (hour < "13"){
            $(".dscrptn4").addClass("future")
        }else{
            $(".dscrptn4").addClass("past")
        }
        if (hour === "14"){
            $(".dscrptn5").addClass("present")
        }
        if (hour < "14"){
            $(".dscrptn5").addClass("future")
        }else{
            $(".dscrptn5").addClass("past")
        }
        if (hour === "15"){
            $(".dscrptn6").addClass("present")
        }
        if (hour < "15"){
            $(".dscrptn6").addClass("future")
        }else{
            $(".dscrptn6").addClass("past")
        }
        if (hour === "16"){
            $(".dscrptn7").addClass("present")
        }
        if (hour < "16"){
            $(".dscrptn7").addClass("future")
        }else{
            $(".dscrptn7").addClass("past")
        }
        if (hour === "17"){
            $(".dscrptn8").addClass("present")
        }
        if (hour < "17"){
            $(".dscrptn8").addClass("future")
        }else{
            $(".dscrptn8").addClass("past")
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