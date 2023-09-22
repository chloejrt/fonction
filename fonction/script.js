"use strict";

function saluer(){
    console.log("Bonjour bienvenue");
}
saluer();

let pseudo="Ralfou";
function saluerQqun (prenom){ // lorsque qqlch est entre parenthèse = paramètre

    console.log("Bonjour "+ prenom);

}
saluerQqun("Bob");
saluerQqun (pseudo);