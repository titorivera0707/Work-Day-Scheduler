var today =  new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var day = today.getDay();
var date = today.getDate();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
var month = today.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = (days[day]);
var m = (months[month]);
var dt = date
var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
document.getElementById("currentDay").innerHTML = d + ", " + m + " " + dt 
function initial() {
    for (var i = 0; i < workHours.length; i++) {
      $('.container').append("<div id=" + workHours[i] + " class='row'><div id='time-block' class='time-block col-2'><h3 class='hour hr" + i + "'>" + workHours[i] + "</h3></div><textarea class='description dscrptn" + i + " col-8'></textarea><button class='saveBtn Btn" + i + " col-2'>Save</button></<div>");
    }
        if (localStorage.length > 0){
            for (var i = 0; i < workHours.length; i++) {
                var locstrg = localStorage.getItem(workHours[i])
            console.log(locstrg)
            var row = $("#" + workHours[i])
            row.children().eq(1).text(JSON.parse(locstrg))
            }
        }

        console.log(hours)
        for(i = 0; i < militaryHours.length; i++){
            if (hours < militaryHours[i]) {
            var row = $("#" + workHours[i])
            row.children().eq(1).addClass("future")
            }
            else if (hours > militaryHours[i]) {
                var row = $("#" + workHours[i])
                row.children().eq(1).addClass("past")
                }
            else if (hours === militaryHours[i]) {
                var row = $("#" + workHours[i])
                row.children().eq(1).addClass("present")
                }
        }

        $(".Btn0").on("click", function()   {
        localStorage.setItem($(".hr0").text(), JSON.stringify($(".dscrptn0").val()))
});

}

$("body").on("click", ".saveBtn", function() {
    var ths = $(this).parent()
    console.log(ths.attr("id"))
    localStorage.setItem(ths.attr("id"), JSON.stringify($(ths.children().eq(1)).val()))
})

var description = JSON.parse(localStorage.getItem("hello"))
var startofmyvariables = localStorage.getItem("myhomework") || ""
startofmyvariables.split()

// expected outcome 5

initial()