// Getting references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var stateInput = document.querySelector("#state");
var searchBtn = document.querySelector("#filter-btn");
// var cityInput= document.querySelector("#city");
// var countryInput = document.querySelector("#country");
// var shapeInput = document.querySelector("#shape");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchBtn.addEventListener("click", function (event) {
  handleSearchButtonClick(event)
});

//Assign the data from `data.js` to a descriptive variable
var filteredUFO = data;

// renderTable renders the filteredUFO to the tbody
function renderTable() {
  tbody.innerHTML = "";
  // console.log("rendering")

  for (var i = 0; i < filteredUFO.length; i++) {

    // Get the current sighting object and its fields
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick(event) {
  event.preventDefault();
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = dateInput.value.trim();
  var filterState = stateInput.value.trim().toLowerCase();
  // var filterCity = cityInput.value.trim().toLowerCase();

  if (filterDate.length != 0) {
    filteredUFO = data.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === filterDate;
    });
  }
  else {
    filteredUFO = data
  }
  if (filterState.length != 0) {
    filteredUFO = filteredUFO.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === filterState;
    });
  }
  else {
    filteredUFO = filteredUFO
  }
  // if (filterCity.length!=0){
  //   filteredUFO = filteredUFO.filter(function(sighting){
  //     var sightingCity = sighting.city;
  //     return sightingCity === filterCity;
  //   });
  // }
  // else {
  //   filteredUFO = filteredUFO
  // }

  
  renderTable();

}
// Render the table for the first time on page load
renderTable();