
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere 
// e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// chiedo i km da fare

const KM = parseInt( prompt("Quanti km devi percorrere?") );
console.log(KM);

// chiedo l'età


// prezzo biglietto
//  - prezzo 0.21€ al km
// calcolo prezzo biglietto
//  -SE minorenne <=17 anni
//      sconto 20%
//  -ALTRIMENTI SE >= 65 anni
//      sconto 40%
//  -ALTRIMENTI 
//      prezzo intero