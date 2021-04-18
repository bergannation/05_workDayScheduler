var today = dayjs();
$("#currentDay").text(today.format("[Today is ] ddd - MMM D, YYYY, h:mma"));
console.log(today);
var currentHour = dayjs().hour();
console.log(currentHour);

var container = $(".container");
var messageDiv = $(".message");
var storedCalendar = [];

// document renders when ready
$(document).ready(function () {
  function generateStored() {
    if (!localStorage.getItem("calendar")) {
      localStorage.setItem("calendar", JSON.stringify(storedCalendar));
    } else {
      storedCalendar = JSON.parse(localStorage.getItem("calendar"));
    }

    // storedCalendar.forEach(function (storedCalendar) {
    //   var newItem = $("textarea");

    //   newItem.textContent = storedCalendar.Task;
    //   console.log(storedCalendar.Task);
    // });
  }
  generateStored();
  var hours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  for (var i = 0; i < hours.length; i++) {
    var sectionEl = $("<section>");
    var divEl = $("<div>");
    var spanEl = $("<span>");
    var textareaEl = $("<textarea>");
    var buttonEl = $("<button>");
    var imgEl = $("<i>");
    var messageEl = $("<article>");

    container.attr("class", "container-fluid");

    sectionEl.addClass("row m-2 p-2 d-flex justify-content-center border-0");
    container.append(sectionEl);

    divEl.addClass("row time-block col-12 col-lg-9 m-0 p-0 shadow");
    spanEl.addClass("hour col-1");
    textareaEl.addClass("description col-10");
    buttonEl.addClass("saveBtn btnEl btn-lg active col-1");
    imgEl.addClass("fa fa-save");

    divEl.attr("hour-label", hours[i]);
    spanEl.attr("hour-label", hours[i]);
    textareaEl.attr("label", hours[i]);
    buttonEl.attr("hour-label", hours[i]);
    spanEl.text(hours[i]);

    sectionEl.append(divEl);
    divEl.append(spanEl);
    divEl.append(textareaEl);
    divEl.append(buttonEl);
    buttonEl.append(imgEl);
  }

  // color code the divs function
  function generateColor() {
    $("span").each(function (index) {
      if ($(this).text().slice(0, 2) < currentHour) {
        $(this).next().addClass("past");
      } else if ($(this).text().slice(0, 2) == currentHour) {
        $(this).next().addClass("present");
      } else {
        $(this).next().addClass("future");
      }
    });
  }
  generateColor();

  // save button function
  function saveButtonFunction() {
    var hourLabel = $(this).siblings(".description").attr("hour-label");
    var textAreaInput = $(this).siblings(".description").val();

    var newInput = {
      Hour: hourLabel,
      Task: textAreaInput,
    };
    if (newInput.Task === "") {
      return;
    }
    storedCalendar = JSON.parse(localStorage.getItem("calendar"));
    if (storedCalendar === null) {
      storedCalendar = [];
    }
    storedCalendar.push(newInput);
    localStorage.setItem("calendar", JSON.stringify(storedCalendar));
    console.log(localStorage.getItem("calendar"));
    // message
    var message = "Schedule saved successfully!";
    feedbackMessage(message);
  }
  var saveButton = $(".saveBtn");
  saveButton.on("click", saveButtonFunction);
});

// saved button feedback message function
function feedbackMessage(message) {
  self = $(".message");
  self.append(message);
  setTimeout("self.fadeOut()", 1000);
  if (setTimeout === 0) {
    self.empty();
    self.style.display = "block;";
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
