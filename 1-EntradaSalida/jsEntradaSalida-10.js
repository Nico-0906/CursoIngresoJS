/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
     var imported = parseInt(document.getElementById("importe").value);
     var result = (imported * 25) /100;
     var muestra;
     muestra = imported - result;
     document.getElementById("resultado").value = muestra;

}
