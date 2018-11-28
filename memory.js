

var t_test = ["0","1","2","3","4","5"];

var tableau1 = ["0", "0", "1", "1", "2", "2"];


var tableau2 = [];


// function random

var calc = 0;
var choix_ordi = 0;

function alea () {

    calc = Math.floor(Math.random() * tableau1.length);

    choix_ordi = tableau1[calc];
}

// melange le tableau

while (tableau1.length) {

    let i = 0;
    i ++;

    alea();

    tableau2.push(choix_ordi);

    tableau1.splice(calc,1);



}

console.log(tableau2);


var tableau3 = [];

var tableau4 = [];

var test = 0;

var limite = 0;

var nbr_paire = 0;

document.getElementById("page1").style.display = "block";
document.getElementById("page2").style.display = "none";


// mise en place des event //

// limite le nombre de carte selectionné à 2

for (let i = 0; i < tableau2.length; i++) {

    document.getElementById("span" + i ).addEventListener("click", function() {

            if (limite < 2) {
                limite++;

                let spani = document.getElementById("span" + i);
                spani.setAttribute("src", "carte" + tableau2[i] + ".png");
                test = tableau2[i];

                tableau4.push(t_test[i]);
                tableau3.push(tableau2[i]);
                console.log(tableau4);
            }

        setTimeout (function() {

            if (tableau3[0] == tableau3[1] && tableau3.length == 2  && tableau4[0] != tableau4[1]) {

                nbr_paire ++;
                good_answer();
                limite = 0;
                tableau3 = [];
            }

            else if (tableau3[0] != tableau3[1] && tableau3.length == 2 && tableau4[0] != tableau4[1]) {

                bad_answer();
                limite = 0;
                tableau3 = [];

            }
        }, 2000);

        if (nbr_paire == 3){

            document.getElementById("nbr_paire").innerHTML = nbr_paire;
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "block";
            document.getElementById("resultat").innerHTML = " WELL PLAYED";

        }
        })

    }

function good_answer() {

    for (let i = 0; i < tableau4.length; i++) {

        document.getElementById("span" + tableau4[i]).style.visibility = "hidden";
    }

    tableau4 = [];
}


function bad_answer() {

    for (let i = 0; i < tableau4.length; i++) {

        document.getElementById("span" + tableau4[i]).src = "dos_de_carte.png";
    }

    tableau4 = [];
}



var s = 15;
var clear;

function decompte() {

    clearTimeout(clear);

    document.getElementById("time").innerHTML = "Timer" + " " + ":" + " " + s--;

    clear = setTimeout(decompte, 1000);


    if (s < 0) {

        clearTimeout(clear);

        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";

        document.getElementById("resultat").innerHTML = "YOU LOSE";
        document.getElementById("nbr_paire").innerHTML = nbr_paire;

        setTimeout(rejouer, 3000);

    }

    if(nbr_paire == 3){

        clearTimeout(clear);

        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        document.getElementById("nbr_paire").innerHTML = nbr_paire;
        document.getElementById("resultat").innerHTML = " WELL PLAYED";
        setTimeout(rejouer, 3000);

    }
}

decompte();


function rejouer(){

    document.getElementById("replay").addEventListener("click", function () {
        location.reload();

    });


}



