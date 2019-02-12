/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo, ancho, radio;
function Rectangulo () 
{
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    var perimetro = (largo + ancho)*2;
    alert(perimetro * 3);
}
function Circulo () 
{
	radio = parseInt(document.getElementById("Radio").value);
    var mostrar = Math.floor(radio * Math.PI * 2);
    alert(mostrar * 3);
}
function Materiales () 
{
	largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    var per = (largo * ancho);
    var volCem = (per * 2);
    var volCal = (per * 3);
    alert("Son " + volCem + " bolsas de cemento y " + volCal + " bolsas de Cal.")
}
