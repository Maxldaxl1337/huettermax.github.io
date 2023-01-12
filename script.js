
document.getElementById("github").style.cursor = "pointer";
github.addEventListener("click", (e) => {
    window.open("https://github.com/Maxldaxl1337");
}) 

document.getElementById("insta").style.cursor = "pointer";
insta.addEventListener("click", (e) => {
    window.open("https://www.instagram.com/maxl.htr/");
}) 

document.getElementById("wfod").style.cursor = "pointer";
wfod.addEventListener("click", (e) => {
    window.open("https://wfo-delivery.vercel.app/");
}) 

document.getElementById("wfod2").style.cursor = "pointer";
wfod2.addEventListener("click", (e) => {
    window.open("https://wfo-delivery.vercel.app/");
}) 

document.getElementById("box").style.cursor = "pointer";
document.getElementById("box1").style.cursor = "pointer";
document.getElementById("box2").style.cursor = "pointer";
document.getElementById("box3").style.cursor = "pointer";

//HTML TAGS TEXT TITLE// 
/*
let tag1 = document.getElementsByClassName("customTag")[0]
tag1.innerText = "<name>"
tag1.style.color = 'rgb(216, 84, 103)'

let tag2 = document.getElementsByClassName("customTag")[1]
tag2.innerText = "</name>"
tag2.style.color = "rgb(216, 84, 103)"
*/

//BLINKY BLINKY//

let visibleCursor = false
setInterval(() => {
    if (visibleCursor){
        document.getElementById("cursor").style.opacity = 0;
    } else {
        document.getElementById("cursor").style.opacity = 1;
    }
    visibleCursor = !visibleCursor
}, 50);