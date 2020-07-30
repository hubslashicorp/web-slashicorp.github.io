let a = 1

function bpoly() {
    if (a == 1) {
        document.getElementById("button").innerHTML = "Atlassian Jira Align";
        document.getElementById("btgeral").style.webkitTransform = "scale(5)";
        document.getElementById("btgeral").style.fillOpacity = "90";
        document.getElementById("texto").style.fontSize = "2"
        a = 2
    } else {
        document.getElementById("button").innerHTML = "Aja";
        document.getElementById("btgeral").style.webkitTransform = "";
        document.getElementById("btgeral").style.fillOpacity = "";
        document.getElementById("texto").style.fontSize = ""
        a = 1
    }
};