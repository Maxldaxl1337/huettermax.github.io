
 document.getElementById("github").style.cursor = "pointer";
 github.addEventListener("click", (e) => {
     window.open("https://github.com/Maxldaxl1337");
 }) 

document.getElementById("instagram").style.cursor = "pointer";
instagram.addEventListener("click", (e) => {
     window.open("https://www.instagram.com/maxl.htr/");
 }) 

document.getElementById("linkedin").style.cursor = "pointer";
linkedin.addEventListener("click", (e) => {
     window.open("https://www.linkedin.com/in/maximilian-h%C3%BCtter-61a016262/");
}) 

// document.getElementById("wfod2").style.cursor = "pointer";
// wfod2.addEventListener("click", (e) => {
//     window.open("https://wfo-delivery.vercel.app/");
// }) 

// document.getElementById("box").style.cursor = "pointer";
// document.getElementById("box1").style.cursor = "pointer";
// document.getElementById("box2").style.cursor = "pointer";
// document.getElementById("box3").style.cursor = "pointer";

//BLINKY BLINKY//

let visibleCursor = false
setInterval(() => {
    if (visibleCursor){
        document.getElementById("cursor").style.opacity = 0;
    } else {
        document.getElementById("cursor").style.opacity = 1;
    }
    visibleCursor = !visibleCursor
}, 400);