let next = document.querySelector(".vitrine-nav-btn-next")
let prev = document.querySelector(".vitrine-nav-btn-prev")
var one = document.querySelector(".one-v")
var two = document.querySelector(".two-v")
var three = document.querySelector(".three-v")
let quatro = document.querySelector(".for-v")
var five = document.querySelector(".five-v")
var a = 1
var time

next.onclick = function() {
    if (a == 1){
     slide2()
    }

    else if (a == 2){
     slide3()
    }

    else if (a == 3) {
     slide1()
    }

}

prev.onclick = function() {
    if (a == 1){
     slide3()
    }

    else if (a == 2){
     slide1()
    }

    else if (a == 3) {
     slide2()
    }

}

function slide1() {
    clearTimeout(time)
    one.style.visibility= "inherit"
    three.style.visibility= "hidden"
    one.style.opacity= "1"
    three.style.opacity= "0"
    two.style.visibility= "hidden"
    two.style.opacity= "0"
    time = setTimeout("slide2()", 5000)
    a = 1
    time
}
function slide2() {
    clearTimeout(time)
    two.style.visibility= "inherit"
    one.style.visibility= "hidden"
    two.style.opacity= "1"
    one.style.opacity= "0"
    three.style.visibility= "hidden"
    three.style.opacity= "0"
    time = setTimeout("slide3()", 5000)
    a = 2
    time
}

function slide3(){
    clearTimeout(time)
    three.style.visibility= "inherit"
    two.style.visibility= "hidden"
    three.style.opacity= "1"
    two.style.opacity= "0"
    one.style.visibility= "hidden"
    one.style.opacity= "0"
    time = setTimeout("slide1()", 5000)
    a = 3
    time
}

function slide4(){
    
    setTimeout("slide5()", 5000)
}

function slide5(){
    shift.classList.remove("is-active")
    cursos.classList.add("is-active")
    shift.style.visibility= "hidden"
    cursos.style.visibility= "inherit"
    shift.style.opacity= "0"
    cursos.style.opacity= "1"
    shift.style.transform= "matrix(0.9, 0, 0, 0.9, 0, 0)"
    cursos.style.transform= "matrix(1, 0, 0, 1, 0, 0)"
    setTimeout("slide1()", 5000)
}


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var al=0;
var start=4.72;
var cw=context.canvas.width/1.9;
var ch=context.canvas.height/2.1;
var diff;
 
function progressBar(){
diff=(al/100)*Math.PI*2;
context.clearRect(0,0,400,200);
context.beginPath();
context.arc(cw,ch,50,0,2*Math.PI,false);
context.fillStyle='transparent';
context.fill();
context.strokeStyle='#91a3ad';
context.stroke();
context.fillStyle='transparent';
context.strokeStyle='#03fac9';
context.textAlign='center';
context.lineWidth=10;
context.font = '10pt Verdana';
context.beginPath();
context.arc(cw,ch,50,start,diff+start,false);
context.stroke();
context.fillText(al+'%',cw+2,ch+6);
if(al>=100){
clearTimeout(bar);

}
 
al++;
}
 
var bar=setInterval(progressBar,50);