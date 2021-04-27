// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni.

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

alert("Ciao! Segui questi semplici passi per calcolare il prezzo del tuo biglietto! Ci vorrà solo un minuto! ;)");

var kilometri = parseInt(prompt("Quanti km devi percorrere?"));
console.log(kilometri);

var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

var prezzoBiglietto = (kilometri * 0.21);
console.log(prezzoBiglietto);

var sconto;

var prezzoFinale;

if (eta < 18) {
    sconto = ((prezzoBiglietto * 20) /100).toFixed(2);
    prezzoFinale = prezzoBiglietto - sconto;
    console.log("Il passeggero è minorenne, il biglietto costa: " + prezzoFinale.toFixed(2));
    document.getElementById("ticket").innerHTML = "Il passeggero è minorenne, il biglietto costa: " +  prezzoFinale.toFixed(2) + " &euro;";
} else if (eta > 65) {
    sconto = ((prezzoBiglietto * 40) /100).toFixed(2);
    prezzoFinale = prezzoBiglietto - sconto;
    console.log("Il passeggero è over-65, il biglietto costa: " + prezzoFinale.toFixed(2));
    document.getElementById("ticket").innerHTML = "Il passeggero è over-65, il biglietto costa: " +  prezzoFinale.toFixed(2) + " &euro;";
} else {
    sconto = 0;
    prezzoFinale = prezzoBiglietto - sconto;
    console.log("Il prezzo del biglietto ordinario è " + prezzoFinale.toFixed(2));
    document.getElementById("ticket").innerHTML = "Il prezzo del biglietto ordinario è " +  prezzoFinale.toFixed(2) + " &euro;";
}