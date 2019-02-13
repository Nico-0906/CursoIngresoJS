/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var fahr, cent;
function FahrenheitCentigrados () 
{
    fahr = parseInt(document.getElementById("Temperatura").value);
    cent = Math.floor((fahr - 32) * 5/9);
    alert(fahr + " fahrenheit son " + cent + " grados centigrados.");
}

function CentigradosFahrenheit () 
{
	cent = parseInt(document.getElementById("Temperatura").value);
    fahr = Math.floor((cent * 1.8) + 32);
    alert(cent + " grados centigrados son " + fahr + " grados fahrenheit.");
}
