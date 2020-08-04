// chiedere l'eta del passeggero e salvare la variabile
var age =prompt("Inserisci l'età");
// chiedere i kilometri che il passeggero desidera percorrere
var km =prompt("kilometri da percorrere");
// costo biglietto per ogni singolo kilometro
var pricekm = 0.21;
// costo totale del biglietto in base ai kilometri
var priceTotal= pricekm * km;
// condizione per lo sconto del biglietto
if (age > 65) {
  pricekm = 0.21 * 0.6;
}
else if (age < 18) {
  pricekm = 0.21 *0.8;
}
else {
  pricekm = 0.21;
}
