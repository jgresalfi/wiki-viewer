'use strict';

document.addEventListener("DOMContentLoaded", function() {
    var clicker = document.querySelector("#clicker"),
        searchBox = document.querySelector("#search");

    function searchReveal() {
        console.log("searchReveal function firing!");
        searchBox.classList.toggle("reveal");
    }

    clicker.onclick = searchReveal;
})
