


/*
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

var tableau1 = [0, 1, 2, 3, 4, 5];


var tableau2 = [];


// function random

var calc = 0;
var choix_ordi = 0;

function alea () {

    calc = Math.floor(Math.random() * tableau1.length);

    choix_ordi = tableau1[calc];
}


while (tableau1.length) {

    var i = 0;
    i ++;



    var im = document.createElement("img");
    im.id = "im" + tableau2[i];




    alea();

    tableau2.push(choix_ordi);

    tableau1.splice(calc,1);

    img[i].appendChild(im);

    console.log(tableau1);
    console.log(tableau2);


}
*/

var recto_carte = [0,0,1,1,2,2];

var tableau1 = [0,0,0,0,0,0 ];

var choix = [];

var bonne_rep = 0;

var imgCartes = document.getElementById("section1G").getElementsByTagName("img");

for (i = 0; i < imgCartes.length; i++){

    imgCartes[i].noCarte=i;

    imgCartes[i].onclick=function(){

        controleJeu(this.noCarte);
    }
}

initialiseJeu();

function majAffichage(noCarte) {


    switch (tableau1[noCarte]) {
        case 0:
            imgCartes[noCarte].src = "dos_de_carte.png";
            break;
        case 1:
            imgCartes[noCarte].src = "carte" + recto_carte[noCarte] + ".png";
            break;
        case -1:
            imgCartes[noCarte].style.visibility = "hidden";
            break;
    }
}

function rejouer(){

    document.getElementById("victoire").innerHTML = " WELL PLAYED";

    location.reload();

}

function initialiseJeu(){

    for (var position = recto_carte.length - 1; position >= 1; position-- ){

        var hasard = Math.floor(Math.random()*(position+1));

        var sauve = recto_carte[position];

        recto_carte[position] = recto_carte[hasard];

        recto_carte[hasard] = sauve;
    }
}

function controleJeu(noCarte){

    if(choix.length<2){

        if(tableau1[noCarte]==0){

            tableau1[noCarte]=1;

            choix.push(noCarte);

            majAffichage(noCarte);
        }

        if(choix.length==2){

            var nouveauEtat = 0;

            if(recto_carte[choix[0]] == recto_carte[choix[1]]){

                nouveauEtat=-1;

                bonne_rep ++;
            }

            tableau1[choix[0]] = nouveauEtat;

            tableau1[choix[1]] = nouveauEtat;

            setTimeout(function(){

                majAffichage(choix[0]);

                majAffichage(choix[1]);

                choix=[];

                if(bonne_rep == 3){

                    rejouer();

                }
            },1000);
        }
    }
}




