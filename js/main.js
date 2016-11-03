'use strict';

function searchReveal() {
	alert("This sucker's working!");
}

document.addEventListener("DOMContentLoaded", function(){
	var searchBtn = document.querySelector("#clicker");
	console.log(searchBtn);
	searchBtn.onclick = searchReveal;
})