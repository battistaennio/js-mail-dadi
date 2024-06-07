//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//selettore input e button
const inputMail = document.querySelector("input");
const verify = document.querySelector("button");

//creazione lista
const whiteList = ["gino@gmail.com", "pino@gmail.com", "pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"]

//creazione evento su click
verify.addEventListener("click",
    function () {

        //lettura inputMail
        let userMail = inputMail.value

        //ciclo per esaminare elementi whiteList
        for (let i = 0; i < whiteList.length; i++) {
            
            //selettore elementi lista
            let listGuest = whiteList[i]
            console.log(listGuest);
        }

     }
)

