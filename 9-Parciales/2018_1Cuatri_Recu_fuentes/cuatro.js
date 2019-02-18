function mostrar()
{
    var cantidad;
    cantidad = prompt("Cantidad de libros comprados");
    cantidad = parseInt(cantidad);
    var precio;
    precio = prompt("Precio total de los libros");
    precio = parseInt(precio);
    var tarjeta;
    tarjeta = confirm("Pagara con tarjeta");


    if(cantidad > 2 && precio > 2000){
            precio = precio - (precio * 10) / 100;
            precio = precio - (precio * 15) / 100;
      }else{
        if(cantidad > 2 && precio < 2000){
            precio = precio - (precio * 10) / 100;
        }else{
            if(cantidad < 2 && precio > 2000){
                precio = precio - (precio * 15) / 100;
            }
        }
    }

    if(tarjeta){
        precio = precio + (precio * 10) / 100;
        alert("Por abonar con tarjeta se le cobrara un recargo del 10% abonando " + precio);          
    }else{
        alert(precio);          
    }

}
