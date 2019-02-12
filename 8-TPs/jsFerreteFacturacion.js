/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var preUno, preDos, preTres;
function Sumar () 
{
    preUno = parseInt(document.getElementById("PrecioUno").value);
    preDos = parseInt(document.getElementById("PrecioDos").value);
    preTres = parseInt(document.getElementById("PrecioTres").value);
    var suma = preUno + preDos + preTres;
    alert("La suma es " + suma);
}
function Promedio () 
{
	preUno = parseInt(document.getElementById("PrecioUno").value);
    preDos = parseInt(document.getElementById("PrecioDos").value);
    preTres = parseInt(document.getElementById("PrecioTres").value);
    alert((preUno + preDos + preTres)/3);
}
function PrecioFinal () 
{
	preUno = parseInt(document.getElementById("PrecioUno").value);
    preDos = parseInt(document.getElementById("PrecioDos").value);
    preTres = parseInt(document.getElementById("PrecioTres").value);
    var final = (preUno + preDos + preTres);
    var iva = ((final * 21) / 100);
    alert(final + iva);
}