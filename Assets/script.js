var today = dayjs();
$("#currentDay").text(today.format("[Today is ] ddd - MMM D, YYYY, h:mma"));

var currentHr = dayjs().get("h");
console.log(currentHr);

var container = $(".container");
var hourSection = [
  "09:00:",
  "10:00:",
  "11:00:",
  "12:00:",
  "1:00:",
  "2:00:",
  "3:00:",
  "4:00:",
  "5:00:",
];
localStorage.setItem("hourSection", JSON.stringify(hourSection));

for (var i = 0; i < hourSection.length; i++) {
  var timeText = hourSection[i];
  var sectionEl = $("<section>");
  var divEl = $("<div>");
  var spanEl = $("<span>");
  var textareaEl = $("<textarea>");
  var buttonEl = $("<button>");
  var imgEl = $("<i>");

  container.attr("class", "container-fluid");

  sectionEl.addClass("m-2 p-2 d-flex justify-content-center border-0");
  container.append(sectionEl);
  divEl.addClass("row time-block col-12 col-lg-9 m-0 p-0 shadow");
  spanEl.addClass("hour col-1 align-items-center");
  spanEl.text(timeText);
  textareaEl.addClass("description col-10");
  buttonEl.addClass("saveBtn btn-lg col-1");
  imgEl.addClass("fa fa-save");
  sectionEl.append(divEl);
  divEl.append(spanEl);
  divEl.append(textareaEl);
  divEl.append(buttonEl);
  buttonEl.append(imgEl);
}

// 1. Render the calender blocks (timeblocks)

// - Read from localStorage
// - Create input field
// - Create Save Button
// - Add CSS classes for style
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
