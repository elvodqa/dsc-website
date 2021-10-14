const google_logo = document.getElementById("main_google_logo");

google_logo.onclick = () => {
    window.scrollBy({
        top: 800,
        left: 0,
        behavior: "smooth"
    });
}

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

var onresize = function() {
    var width = document.body.clientWidth;
    var w2 = window.innerWidth;
    var height = document.body.clientHeight;
    var centerValue = width / 2;
    textLength = getTextWidth("Home Projects Contact About", 30);
    var navBar = document.getElementById("header_nav");
    navBar.style.margin = "0 0 0 "+ Math.round(centerValue - Math.round(textLength * 2 ))+ "px";
    console.log("Roundlanmadan: "+"0 0 0 "+ (centerValue - (textLength) + "px"));
    console.log("Roundlanmış: " + "0 0 0 "+ Math.round(centerValue - (textLength))+ "px");
    console.log("Text width: " + getTextWidth("Home Projects Contact About", 30));
}
window.addEventListener("resize", onresize);
