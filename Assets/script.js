var today = dayjs();
$("#currentDay").text(today.format("[Today is ] ddd - MMM D, YYYY, h:mma"));
console.log(today);

var container = $(".container");
var messageDiv = $(".message");
$(document).ready(function () {
  var dailySchedule = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: "",
    24: "",
  };
  console.log(dailySchedule);
  localStorage.setItem("dailySchedule", JSON.stringify(dailySchedule));

  for (var i = 0; i < 9; i++) {
    var timeText = dailySchedule[i];
    var sectionEl = $("<section>");
    var divEl = $("<div>");
    var spanEl = $("<span>");
    var textareaEl = $("<textarea>");
    var buttonEl = $("<button>");
    var imgEl = $("<i>");
    var messageEl = $("<article>");

    container.attr("class", "container-fluid");

    sectionEl.addClass("m-2 p-2 d-flex justify-content-center border-0");
    container.append(sectionEl);
    divEl.addClass("row time-block col-12 col-lg-9 m-0 p-0 shadow");
    divEl.attr("data-label", timeText);
    spanEl.addClass("hour col-1");
    spanEl.text(timeText);
    textareaEl.addClass("description col-10");
    buttonEl.addClass("saveBtn btnEl btn-lg col-1");
    imgEl.addClass("fa fa-save");
    sectionEl.append(divEl);
    divEl.append(spanEl);
    divEl.append(textareaEl);
    divEl.append(buttonEl);
    buttonEl.append(imgEl);
  }
});

var saveButton = $(".btnEl");
var textInput = $("textarea");

saveButton.on("click", function (event) {
  event.preventDefault();
  var txt = $(textInput).val();
  console.log(txt);
  localStorage.setItem("Tasks", JSON.stringify(txt));

  var message = "Schedule saved successfully!";
  feedbackMessage(message);
});

function feedbackMessage(message) {
  self = $(".message");
  self.append(message);
  setTimeout("self.fadeOut()", 1000);
  if (setTimeout === 0) {
    self.empty();
  }
}
// 1. Render the calender blocks (timeblocks)

// - Read from localStorage

// - determine if timeblock is past/present/future
// - Add "value" from localStorage into input
// - Append to DOM
// - Add to local variable

//add event listener for save button//

// 1. Event Handler for "SAVE"

// - When a user enters text into a field
// - then user clicks "matching" "SAVE" button
//   - save the related input field into local storage
// - display notification/toast when the save is complete

// would you suggest making it an object instead of an array to have key value pairs?
//currently my function to check timeblocks against current time isn't working
//when i hit save, my message appears and disappears, but then i can't repeat it
// line 78 on the display:none-get rid of style after it executes-message clear function
