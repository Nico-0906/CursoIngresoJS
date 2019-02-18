function mostrar()
{
    var precio = prompt("Precio de la compra");
    parseInt(precio);
    var descontado = precio - (precio*10)/100;
    var resultado = descontado + (descontado*21)/100;
    alert("tu compra es de " + precio + " tenes un descuento del 10% queda en " + descontado + " mas el iva es " + resultado);
}
