'use strict';

document.addEventListener("DOMContentLoaded", function() {

    //Event listener to reveal search field on magnifying glass click
    var clicker = document.getElementById("clicker"),
        searchBox = document.getElementById("search");

    function searchReveal() {
        searchBox.classList.toggle("reveal");
    }

    clicker.onclick = searchReveal;
    //End search field click event code

    //AJAX call and response callback function
    var searchTxt = document.getElementById("search"),
        ajaxURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Albert%20Einstein&format=json&utf8=";

    function getResponse(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open('GET', url);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                console.log(this.status);
                callback(this.response);
            } else {
                console.log(this.error);
            }
        }; //End xhr.onload
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("postman-token", "5cef329f-7549-4ee8-c727-26fbff8c8d6e");
        xhr.send();
    } //End getResponse

    function responseWrite(data) {
        var resultDiv = document.getElementById("result"),
            artFrag = document.createDocumentFragment(),
            artTitle = document.createElement("h3"),
            artSnip = document.createElement("p");
        for (var i = 0; i < data.search.length; i++) {
            artTitle.innerHTML = data.search[i].title;
            artSnip.innerHTML = data.search[i].snippet;
            artFrag.append(artTitle, artSnip);
        }
        resultDiv.append(artFrag);
    }

    //Fires getResponse() and responseWrite() to get data and write it to page
    searchTxt.onchange = getResponse(ajaxURL, responseWrite);



})
