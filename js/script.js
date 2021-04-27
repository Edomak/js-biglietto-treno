// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni.

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

alert("Ciao! Segui questi semplici passi per calcolare il prezzo del tuo biglietto! Ci vorrà solo un minuto! ;)");

var kilometri = parseInt(prompt("Quanti km devi percorrere?"));
console.log(kilometri);
document.getElementById("km").innerHTML = kilometri;

var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);
document.getElementById("età").innerHTML = eta;

var prezzoBiglietto = kilometri * 0.21;
console.log(prezzoBiglietto.toFixed(2));
var prezzoBiglietto = prezzoBiglietto.toFixed(2);

var scontoMinorenni = (prezzoBiglietto * 20) / 100;
console.log(scontoMinorenni.toFixed(2));
var scontoMinorenni = scontoMinorenni.toFixed(2);

var prezzoMinorenni = prezzoBiglietto - scontoMinorenni;
console.log(prezzoMinorenni.toFixed(2));
var prezzoMinorenni = prezzoMinorenni.toFixed(2);

var scontoAnziani = (prezzoBiglietto * 40) / 100;
console.log(scontoAnziani.toFixed(2));
var scontoAnziani = scontoAnziani.toFixed(2);

var prezzoAnziani = prezzoBiglietto - scontoAnziani;
console.log(prezzoAnziani.toFixed(2));
var prezzoAnziani = prezzoAnziani.toFixed(2);

if (eta < 18) {
    prezzoBiglietto = prezzoMinorenni;
    console.log("Prezzo del biglietto per i minorenni");
    document.getElementById("prezzo-finale").innerHTML = prezzoMinorenni;
} else if (eta > 65) {
    prezzoBiglietto = prezzoAnziani;
    console.log("Prezzo del biglietto per gli anziani");
    document.getElementById("prezzo-finale").innerHTML = prezzoAnziani;
} else {
    prezzoBiglietto == prezzoBiglietto;
    console.log("prezzo del biglietto ordinario");
    document.getElementById("prezzo-finale").innerHTML = prezzoBiglietto;
}