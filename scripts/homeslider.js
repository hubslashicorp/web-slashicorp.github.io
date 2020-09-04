window.load = (1);

var bgNumber = 1;

function slide(n) {
    var allBgs = 4;
    document.getElementById("imageBg").style.backgroundImage = "url('images/" + n + ".jpg')";
    botoes(n, allBgs)
}

function anterior() {
    if (bgNumber > 1) {
        bgNumber--;
        slide(bgNumber);
    }
}


function proximo() {
    if (bgNumber < 4) {
        bgNumber++;
        slide(bgNumber);
    }
}


function botoes(n, m) {
    document.getElementById('botoes').innerHTML = "";
    for (a = 1; a <= m; a++) {
        if (a == n) {
            document.getElementById('botoes').innerHTML += "<li.botao class='selected' onclick='slide(" + a + ")'></li>";
        } else {
            document.getElementById('botoes').innerHTML += "<li.botao onclick='slide(" + a + ")'></li>";
        }
    }
}

//bymaximus