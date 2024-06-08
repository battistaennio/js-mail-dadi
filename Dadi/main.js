//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//selettore button
const playButton = document.querySelector("button");

//selettore output vincita
let result = document.getElementById("result-output");

//selettore simbolo sfida
let symbol = document.getElementById("symbol")

//il gioco parte al click del button
playButton.addEventListener("click",
    function () {

        //generatore numero casuale pc
        let pcPlay = Math.floor(Math.random() * 6) + 1;
        document.getElementById("pc-output").innerText = pcPlay;
    
        //generatore numero casuale user
        let userPlay = Math.floor(Math.random() * 6) + 1;
        document.getElementById("user-output").innerText = userPlay;
    
        //regole del gioco
        if (pcPlay > userPlay) {
            result.innerText = "Vince il Computer, Ritenta";
            symbol.innerText = "<"
        } else if (pcPlay < userPlay) {
            result.innerText = "Hai Vinto!";
            symbol.innerText = ">"
        } else {
            result.innerText = "Parità";
            symbol.innerText = "="
        }
    }
)
