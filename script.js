var colorA = document.querySelector(".color1");
var colorB = document.querySelector(".color2");
var colorCode = document.querySelector("h3");
var body = document.getElementById("gradiant");

function setGradiant() {
    body.style.background = "linear-gradient(to right, " + colorA.value + "," + colorB.value + ")";
    
    colorCode.textContent = body.style.background + ";";
}

colorA.addEventListener("input", setGradiant);

colorB.addEventListener("input", setGradiant);