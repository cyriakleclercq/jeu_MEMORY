

// initializes the table

var tableau1 = ["0", "0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5"];

// table to find the right position on the card clicked
var t_test = ["0","1","2","3","4","5","6","7","8","9","10","11"];

var tableau2 = [];

// random function

var calc = 0;
var choix_ordi = 0;

function alea () {

    calc = Math.floor(Math.random() * tableau1.length);

    choix_ordi = tableau1[calc];
}

// mix values of "tableau1" in "tableau2" and clean "tableau1"

while (tableau1.length) {

    let i = 0;
    i ++;

    alea();

    tableau2.push(choix_ordi);

    tableau1.splice(calc,1);

}
console.log(tableau1);
console.log(tableau2);

// table to compare the user choice
var tableau3 = [];

// table to point the card clicked by the user
var tableau4 = [];

var test = 0;

var limite = 0;

var nbr_paire = 0;

// display only "page1"

document.getElementById("page1").style.display = "block";
document.getElementById("page2").style.display = "none";


// setting up the event  //


for (let i = 0; i < tableau2.length; i++) {

    document.getElementById("span" + i ).addEventListener("click", function() {

        // limit the number of selected cards to 2

        if (limite < 2) {
                limite++;

                // randomly put the new cards in the game

                let spani = document.getElementById("span" + i);
                spani.setAttribute("src", "carte" + tableau2[i] + ".png");
                test = tableau2[i];

                tableau4.push(t_test[i]);
                tableau3.push(tableau2[i]);

                if (tableau4[0] == tableau4[1]) {
                    bad_answer();
                    limite = 0;
                    tableau3 = [];

                }
            }

        setTimeout (function() {

            // compare the value of "tableau3" //


            // if value of "tableau3" is equal


            if (tableau3[0] == tableau3[1] && tableau3.length == 2  && tableau4[0] != tableau4[1]) {

                nbr_paire ++;
                good_answer();
                limite = 0;
                tableau3 = [];
            }

            // if value of "tableau3" isn't equal

            else if (tableau3[0] != tableau3[1] && tableau3.length == 2 && tableau4[0] != tableau4[1]) {

                bad_answer();
                limite = 0;
                tableau3 = [];

            }

            // timer to display the card

        }, 2000);

        // condition to win

        if (nbr_paire == 6){

            //display the result
            document.getElementById("nbr_paire").innerHTML = nbr_paire;

            // display only "page2"
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "block";

            // display a victory message
            document.getElementById("resultat").innerHTML = " WELL PLAYED";

        }
        })

    }

function good_answer() {

    for (let i = 0; i < tableau4.length; i++) {

        //hide the card
        document.getElementById("span" + tableau4[i]).style.visibility = "hidden";
    }

    tableau4 = [];
}


function bad_answer() {

    for (let i = 0; i < tableau4.length; i++) {

        //return the card
        document.getElementById("span" + tableau4[i]).src = "dos_de_carte.png";
    }

    tableau4 = [];
}



var s = 50;
var clear;

// countdown function

function decompte() {

    clearTimeout(clear);

    //display the countdown on the site
    document.getElementById("time").innerHTML = "Timer" + " " + ":" + " " + s--;

    clear = setTimeout(decompte, 1000);

// if timer is down
    if (s < 0) {

        clearTimeout(clear);

        //display only "page2"
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";

        //display the defeat message + number of correct choice
        document.getElementById("resultat").innerHTML = "YOU LOSE";
        document.getElementById("nbr_paire").innerHTML = nbr_paire;

        // delay to retry
        setTimeout(rejouer, 3000);

    }

    // if the user win
    if(nbr_paire == 6){

        //stop the timer
        clearTimeout(clear);

        //display only "page2"
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";

        //display the number of correct answer
        document.getElementById("nbr_paire").innerHTML = nbr_paire;
        document.getElementById("resultat").innerHTML = " WELL PLAYED";

        // delay the retry
        setTimeout(rejouer, 1000);

    }
}

decompte();

//replay function

function rejouer(){

    document.getElementById("replay").addEventListener("click", function () {
        location.reload();

    });


}



