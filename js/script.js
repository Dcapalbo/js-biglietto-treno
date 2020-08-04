//km da percorrere
var km = prompt("Inserire km da percorrere");
//età del passeggero
var age = prompt("Inserire l'età");
//prezzo base del biglietto
var priceKm = 0.21;

//condizione per sconto del biglietto
if (age < 18) {
  priceKm = priceKm * 0.8;
} else if (age >= 65) {
  priceKm = priceKm * 0.6;
}
var totalPrice = priceKm * km;
// stampare nel flusso HTML
document.getElementById("ticket-price").innerHTML = totalPrice;
