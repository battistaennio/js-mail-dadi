//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


//generatore numero casuale pc
let pcPlay = Math.floor(Math.random() * 6) + 1;
console.log("Giocata PC: ", pcPlay);

//generatore numero casuale user
let UserPlay = Math.floor(Math.random() * 6) + 1;
console.log("Giocata User: ", UserPlay);

//regole del gioco
if (pcPlay > UserPlay) {
    console.log("vince pc");
} else if (pcPlay < UserPlay) {
    console.log("vince user");
} else {
    console.log("parità");
}