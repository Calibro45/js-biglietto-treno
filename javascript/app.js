
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere 
// e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// chiedo i km da fare

const KM = parseInt(prompt("Quanti km devi percorrere?"));
console.log(KM);

// chiedo l'età

const userAge = parseInt(prompt("quanti anni hai?"));
console.log(userAge);

// prezzo biglietto
//  - prezzo 0.21€ al km

const TICKETPRICE = 0.21;
console.log(TICKETPRICE);

// calcolo prezzo biglietto
//  -0.21€ * km

const TICKET_TOT = TICKETPRICE * KM;
console.log(TICKET_TOT);

// prezzo sconto 20%

const firstDiscount = (TICKET_TOT*20)/100;
console.log(firstDiscount);

// prezzo sconto 40%

const secondDiscount = (TICKET_TOT*40)/100;
console.log(secondDiscount);

//  -SE minorenne <=17 anni
//      sconto 20%
//  -ALTRIMENTI SE >= 65 anni
//      sconto 40%
//  -ALTRIMENTI 
//      prezzo intero

const userPrice = document.getElementById("ticket_price");

if (userAge<=17) {
    userPrice.innerHTML += (TICKET_TOT-firstDiscount).toFixed(2);

} else if (userAge>=65) {
    userPrice.innerHTML += (TICKET_TOT-secondDiscount).toFixed(2);

} else {
    userPrice.innerHTML += (TICKET_TOT).toFixed(2);
}


