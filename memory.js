



//            ------------decompte function---------------a

// innit variable

var s = 5;
var clear;
var seconds = document.getElementById("timer").innerHTML;


// init timer

function decompte() {

    clearTimeout(clear);

        document.getElementById("timer").innerHTML = s --;

        clear = setTimeout(decompte,1000);

    if (s < 0 ) {
        clearTimeout(clear)
    }
}
setTimeout(decompte, 1000);

// init  table

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");



var tableau1 = [img1, img2, img3, img4, img5, img6];

var tableau2 = [];


// function random

var calc = 0;
var choix_ordi = 0;

function alea () {
    calc = Math.floor(Math.random() * tableau1.length);

    choix_ordi = tableau1[calc];
}


while (tableau1.length) {

alea();

tableau2.push(choix_ordi);

tableau1.splice(calc,1);

console.log(tableau1);
console.log(tableau2);

}

// valeur des span






