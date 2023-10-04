let scale = 1;

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const three = document.getElementById("three");

const dot = document.getElementById("dot");
const header = document.getElementById("header");
var browserWidth = header.clientWidth;

function handleNav(param) {
    console.log(param);
    if (param == "home") {
        window.scrollTo({
            top: 0,
            behavior:"smooth",
        });
        dot.style.transform = "translateX(0px)";

    } else if (param == "about") {
        window.scrollTo({
            top: bg1.scrollHeight,
            behavior:"smooth",
        });
        dot.style.transform = "translateX(" + browserWidth / 3 + "px)";
    } else if (param == "dream") {
        window.scrollTo({
            top: bg1.scrollHeight * 2,
            behavior:"smooth",
        });
        dot.style.transform = "translateX(" + browserWidth / 1.5 + "px)";
    }
 }   

 window.addEventListener("scroll", function(event){
    console.log(window.scrollY);
    if (window.scrollY == 0) {
        dot.style.transform = "translateX(0px)";
    } else if (window.scrollY == bg1.scrollHeight) {
        dot.style.transform = "translateX(" + browserWidth / 3 + "px)";
    } else if (window.scrollY == bg1.scrollHeight * 2) {
        dot.style.transform = "translateX(" + browserWidth / 1.5 + "px)";
    }
})