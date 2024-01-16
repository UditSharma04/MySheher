// script.js

function showDescription() {
  var complaintType = document.getElementById("complaintType");
  var descriptionTextarea = document.getElementById("complaintDescription");

  // Check if the selected complaint type is "cleaning"
  if (complaintType.value === "cleaning") {
    // If it is "cleaning", make the textarea readonly
    descriptionTextarea.readOnly = true;
  } else {
    // If it is any other type, make the textarea editable
    descriptionTextarea.readOnly = false;
  }
}
