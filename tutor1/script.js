//global variables

var content = document.querySelector(".content");
var contentH1 = document.getElementById("content-h1");
var apiKey = "c40b28aa33c2bef2881ab9e4f13c3ef7"
var searchCity = "Dallas"
var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}`;


function callApi () {
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.city.name)

            secondApiCall(data.city.lat, data.city.lon)
        })
};

function secondApiCall (lat, lon) {

    var secAPIURL = `jsdjskjchasjc${lat}&${lon}gdcljNCLn`

}

callApi()
// function sayHello () {
//     //action
//     console.log("Hi there!")
// }



// function partOne () {
//     //don't run sayHello until this one is done
//     console.log("I'm first!")

//     sayHello();
//     printFruit();
// }

// partOne();


// function printFruit () {

//     var array = ["orange", "apple", "banana", "kiwi"]

//     for (var i =0; i < array.length; i++) {
//         console.log(array[i])
    
//     }

// }

//set order of opperations
// set variable for the api call
// call api and study the json

//decide how to process json data

//make a list of what needs to be done



