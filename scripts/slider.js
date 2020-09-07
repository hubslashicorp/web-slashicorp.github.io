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

// this.active.classList.remove("is-active"),
//                               a.classList.add("is-active"),

