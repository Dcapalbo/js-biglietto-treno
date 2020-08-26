// numero di km da percorrere (prompt)
// età del passeggero (prompt)
// calcola prezzo biglietto (0.21€ / km)
// - <18 20% di sconto
// - >65 40% di sconto
// - all 0% di sconto

var nome = prompt("Inserire nome"); // getting name
var cognome = prompt("Inserire cognome"); // getting surname
var km = prompt("Inserire km da percorrere"); // getting km
var età = prompt("Inserire l'età"); // getting age
var sconto; // declare discount
var d = new Date(); // getting date from user's pc


var priceKm = 0.21; // base price


// error if km or age prompted is NaN
if (isNaN(km)) {
  alert("Errore, i dati inseriti non sono validi");
  km = prompt("Inserire km da percorrere");
} else if (isNaN(età)) {
  alert("Errore, i dati inseriti non sono validi");
  età = prompt("Inserire l'età");
}
// console.log(km + " " + age);


if (età < 18) { // 20% sconto
  priceKm = priceKm * 0.8;
  sconto = "20";
  document.getElementById("sconto").innerHTML = "* sconto già applicato del " + sconto + "%";
} else if (età >= 65) { // 40% sconto
  priceKm = priceKm * 0.6;
  sconto = "40"
  document.getElementById("sconto").innerHTML = "* sconto già applicato del " + sconto + "%";
}

var totalPrice = priceKm * km; // getting the price
totalPrice = totalPrice.toFixed(2);

// printing results in HTML
document.getElementById("total-price").innerHTML = totalPrice + "€";
document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("km").innerHTML = km + "km";
document.getElementById("orologio").innerHTML = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
document.getElementById("data").innerHTML = tomorrow + "-" + d.getMonth() + "-" + d.getFullYear();
