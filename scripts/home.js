let a = 1

function bpoly() {
    if (a == 1) {
        document.getElementById("button").innerHTML = "Lorem ipsum dolor sit amet";
        document.getElementById("btgeral").style.webkitTransform = "scale(1.5)";
        a = 2
    } else {
        document.getElementById("button").innerHTML = "Lorem";
        document.getElementById("btgeral").style.webkitTransform = "";
        a = 1
    }
};