let menuIcon = document.querySelector(".menu-icon");

let pagesDiv = document.querySelector(".pages-div");


menuIcon.addEventListener("click", function(){

    pagesDiv.classList.toggle("show-menu");

});

console.log("JS loaded");