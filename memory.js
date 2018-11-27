
/*

 */


//            ------------decompte function---------------a

// innit variable

var s = 25;
var clear;

// init timer

function decompte() {

    clearTimeout(clear);

        document.getElementById("time").innerHTML = "Timer" + " " + ":" + " " + s--;

        clear = setTimeout(decompte,1000);

// compare second to win or lose

    if (s < 0 ) {

        clearTimeout(clear);

        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";

        document.getElementById("resultat").innerHTML = "YOU LOSE";
        document.getElementById("nbr_paire").innerHTML = bonne_rep;

        setTimeout(rejouer, 3000);

    }

    if (bonne_rep == 3){

        setTimeout(rejouer, 3000);

    }
}
setTimeout(decompte, 1000);

/*
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

// init table + variable ( 6 picture, 6 element)

var recto_carte = [0,0,1,1,2,2];

var tableau1 = [0,0,0,0,0,0 ];

var choix = [];

// display the good answer

var bonne_rep = 0;

// select all picture element on the section1G

var imgCartes = document.getElementById("section1G").getElementsByTagName("img");

// roam on the table "img", attribute a onclick function, the function call "controle jeu" with the number of  picture
for (i = 0; i < imgCartes.length; i++){

    imgCartes[i].noCarte=i;

    imgCartes[i].onclick=function(){

        controleJeu(this.noCarte);
    }
}

// call the function and mix the cards

initialiseJeu();

// display the recto card when the card is clicked

function majAffichage(noCarte) {


    switch (tableau1[noCarte]) {

// display the verso card

        case 0:
            imgCartes[noCarte].src = "dos_de_carte.png";
            break;

// the pattern of the picture

        case 1:
            imgCartes[noCarte].src = "carte" + recto_carte[noCarte] + ".png";
            break;

// the card is hidden

        case -1:
            imgCartes[noCarte].style.visibility = "hidden";
            break;
    }
}

// function replay

function rejouer(){

    location.reload();


}

// function initialise the game + mixed the table elements

function initialiseJeu(){

    for ( var position = recto_carte.length - 1; position >= 1; position-- ){

        var hasard = Math.floor(Math.random()*(position+1));

        var sauve = recto_carte[position];

        recto_carte[position] = recto_carte[hasard];

        recto_carte[hasard] = sauve;

        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";

    }
}


function controleJeu(noCarte){


// prevent if the user click more than twice

    if(choix.length<2){

// pass the card 0 to 1

        if(tableau1[noCarte]==0){

            tableau1[noCarte]=1;

// push the table number on the "choix" table

            choix.push(noCarte);

// maj the display

            majAffichage(noCarte);
        }

// verify if the user choice 2 cards

        if(choix.length==2){

            var nouveauEtat = 0;

            if(recto_carte[choix[0]] == recto_carte[choix[1]]){

// remove the cards

                nouveauEtat=-1;

// incremente the "bonne_rep" variable

                bonne_rep ++;
                document.getElementById("nbr_paire").innerHTML = bonne_rep;
            }

            tableau1[choix[0]] = nouveauEtat;

            tableau1[choix[1]] = nouveauEtat;

            setTimeout(function() {

// maj the display

                majAffichage(choix[0]);

                majAffichage(choix[1]);

                choix=[];

// if you have all good answer, display the result

                if(bonne_rep == 3){

                    document.getElementById("page1").style.display = "none";
                    document.getElementById("page2").style.display = "block";

                    document.getElementById("resultat").innerHTML = " WELL PLAYED";

                }

// countdown 1s

            },1000);
        }
    }
}


