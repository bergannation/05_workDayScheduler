var today = dayjs();
$("#currentDay").text(today.format("[Today is ] ddd - MMM D, YYYY, h:mma"));
console.log(today);
var currentHour = dayjs().hour();
console.log(currentHour);

var container = $(".container");
var messageDiv = $(".message");
var storedCalendar = [];
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
// document renders when ready
$(document).ready(function () {
  function generateStored() {
    if (!localStorage.getItem("calendar")) {
      localStorage.setItem("calendar", JSON.stringify(storedCalendar));
    } else {
      storedCalendar = JSON.parse(localStorage.getItem("calendar"));
    }

    for (var i = 0; i < hours.length; i++) {
      const hour = hours[i];

      storedCalendar.forEach((ele) => {
        if (ele.Hour === hour) {
          const element = document.getElementById(`${hour}`);
          element.innerText = ele.Task;
        }
      });
    }
  }

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
    buttonEl.addClass("btn saveBtn btnEl btn-lg active col-1");
    imgEl.addClass("fa fa-save");

    divEl.attr("id", "text");
    spanEl.attr("hour-label", hours[i]);
    textareaEl.attr("id", hours[i]);
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
    var hourLabel = $(this).siblings(".description").attr("id");
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
  }
  var saveButton = $(".saveBtn");
  saveButton.on("click", saveButtonFunction);

  generateStored();
});
