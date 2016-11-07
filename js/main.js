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
        function getResponse(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
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

        var resultDiv = document.getElementById("result"),
            searchField = document.getElementById("search");


        function responseWrite(response) {
            console.dir(JSON.parse(response));

            var data = JSON.parse(response);
            if (data.query.search.length === 0) {
                resultDiv.innerHTML = "Please try your search again...";
            } else {
                for (var i = 0; i < data.query.search.length; i++) {
                    var artTitle = document.createElement("h3"),
                        artSnip = document.createElement("p"),
                        artDiv = document.createElement("div");
                        artDiv.classList.add("wiki-entry", "col-md-4");
                    artTitle.innerHTML = data.query.search[i].title;
                    artSnip.innerHTML = data.query.search[i].snippet;
                    artDiv.append(artTitle, artSnip);
                    resultDiv.append(artDiv);
                }

            }

        } //End responseWrite callback

        //Fires getResponse() and responseWrite() to get data and write it to page

        searchField.onchange = function() {
            var ajaxURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchField.value + "&format=json&utf8=";
            getResponse(ajaxURL, responseWrite);
            searchField.value = searchField.defaultValue;
            resultDiv.innerHTML = "";
        };
    }) //End docready
