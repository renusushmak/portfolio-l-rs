$(".saveBtn").click(function(){
   var value = $(this).siblings(".description").val();
   var name = $(this).parent().attr("id");
   localStorage.setItem(name,value);
  });


$("#9am").children(".description").val(localStorage.getItem("9am"));
$("#10am").children(".description").val(localStorage.getItem("10am"));
$("#11am").children(".description").val(localStorage.getItem("11am"));
$("#12pm").children(".description").val(localStorage.getItem("12pm"));
$("#1pm").children(".description").val(localStorage.getItem("1pm"));
$("#2pm").children(".description").val(localStorage.getItem("2pm"));
$("#3pm").children(".description").val(localStorage.getItem("3pm"));
$("#4pm").children(".description").val(localStorage.getItem("4pm"));
$("#5pm").children(".description").val(localStorage.getItem("5pm"));

var currenttime = moment().format('MMMM Do YYYY');
$("#currentDay").text(currenttime);

$(".time-block").each(function() {
    var currenthour = moment().hours()
    var time = $(this).attr("id")
    //convert time to 24 hr format
    if (time<currenthour) {
        $(this).children(".description").addClass('past');
    } else if (time == currenthour) {
        $(this).children(".description").addClass('present');
    } else {
        $(this).children(".description").addClass('future');
    }
})
