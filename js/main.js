'use strict';

document.addEventListener("DOMContentLoaded", function() {

    //Event listener to reveal search field on magnifying glass click
    var clicker = document.querySelector("#clicker"),
        searchBox = document.querySelector("#search");

    function searchReveal() {
        searchBox.classList.toggle("reveal");
    }

    clicker.onclick = searchReveal;
    //End search field click event code

    //AJAX call and response callback
    var searchTxt = document.querySelector("#search");

    function getResults() {
        console.log(searchTxt.value);
        //AJAX code goes here...
    }

    searchTxt.onchange = getResults;



})
