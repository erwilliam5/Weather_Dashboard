// Store input value
let city = $("#searchTerm").val();
// Store API key
//const apiKey = "";
let date = new Date();

$("#searchBtn").on("click", function() {
    // get the value of the input from user
    city = $("#searchTerm").val();

    // clear input box
    $("#searchTerm").val("");
  $('#forecastH5').addClass('show');

  // clear input box
  $("#searchTerm").val("");  

  // get the value of the input from user
    city = $("#searchTerm").val();

    // full url to call api
    const queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
  // full url to call api
  const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

    $.ajax({
      url: queryUrl,
      method: "GET"
    })
    .then(function (response){
  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response){

      console.log(response)
    console.log(response)

      console.log(response.name)
      console.log(response.weather[0].icon)
    console.log(response.name)
    console.log(response.weather[0].icon)

      let tempF = (response.main.temp - 273.15) * 1.80 + 32;
      console.log(Math.floor(tempF))
    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    console.log(Math.floor(tempF))

      console.log(response.main.humidity)
    console.log(response.main.humidity)

      console.log(response.wind.speed)
    console.log(response.wind.speed)

      getCurrentConditions(response);
      getCurrentForecast(response);
      makeList();
    getCurrentConditions(response);
    getCurrentForecast(response);
    makeList();

    })
  });


  @@ -74,7 +77,7;
   $("#searchBtn").on("click", function() {
function getCurrentForecast () {

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
    method: "GET"
  }).then(function (response){

// @@ -117,7 +120,7 @@ function getCurrentForecast () {

      }
    }
  })
  });

}