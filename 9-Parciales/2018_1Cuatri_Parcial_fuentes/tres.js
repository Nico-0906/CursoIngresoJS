function mostrar()
{
 var precio = prompt("Precio");
 var descuento = prompt("Descuento");
 var final = (precio * descuento)/100;
 document.getElementById("elPrecioFinal").value = (precio - final) ;

}
