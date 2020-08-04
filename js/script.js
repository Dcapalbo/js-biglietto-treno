//km to do
var km = prompt("Inserire km da percorrere");
//age of the passenger
var age = prompt("Inserire l'età");
//base ticket cost
var priceKm = 0.21;

//condition for the ticket discount
if (age < 18) {
  priceKm = priceKm * 0.8;
} else if (age >= 65) {
  priceKm = priceKm * 0.6;
}
var totalPrice = priceKm * km;
// printing on the HTML file
document.getElementById("ticket-price").innerHTML = totalPrice;
