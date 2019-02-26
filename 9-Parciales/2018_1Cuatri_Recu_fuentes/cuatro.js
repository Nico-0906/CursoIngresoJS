function mostrar()
{
  var impuno;
  var impdos;
  var imptres;
  var impcuatro;
  var suma = 0;
  suma = parseInt(suma);
  suma = impuno + impdos + imptres + impcuatro;
  var porccien = 0;
  porccien = parseInt(porccien);
  porccien = suma * 10/100;
  var porccin = 0;
  porccin = parseInt(porccin);
  porccin = suma * 5/100;
  var porcquin = 0;
  porcquin = parseInt(porcquin);
  porcquin = suma * 15/100;

    impuno = prompt("ingrese primer importe");
    impuno = parseInt(impuno);
    if(isNaN(impuno)){
      impuno = prompt("reingrese numero");
    }
    impdos = prompt("ingrese segundo importe");
    impdos = parseInt(impdos);
    if(isNaN(impdos)){
      impdos = prompt("reingrese numero");
    }
    imptres = prompt("ingrese tercer importe");
    imptres = parseInt(imptres);
    if(isNaN(imptres)){
      imptres = prompt("reingrese numero");
    }
    impcuatro = prompt("ingrese cuarto importe");
    impcuatro = parseInt(impcuatro);
    if(isNaN(impcuatro)){
      impcuatro = prompt("reingrese numero");
    }

    if(impuno >= impdos && impuno >= imptres && impuno >= impcuatro){
        alert("el primer importe es el mayor" + impuno);
    }else{
      if(impdos > imptres && impdos > impcuatro){
        alert("el segundo importe es el mayor" + impuno);
      }else{
        if(imptres > impcuatro){
          alert("el tercer importe es el mayor" + imptres);
        }else{
          alert("el cuarto importe es el mayor" + impcuatro);
        }
      }
    }
/*el prof lo hizo asi
    var num1;
    var num2;
    var num3;
    var num4;
    var mayor= num1
    if(num2>mayor){
      mayor=num2;
    }
    if(num3>mayor){
      mayor=num3;
    }
    if(num4>mayor){
      mayor=num4;
    }
*/

      if(suma >= 100){
        alert("la suma es mayor a 100 el resultado con 10% de dscto. es " + suma - porccien);
      }else{
        if(suma >= 50 && suma < 50){
          alert("la suma es mayor a 50 el resultado con 5% de dscto. es " + suma - porccin);
        }else{
          alert("la suma es menor a 50 el resultado con 15% de recargo es " + suma + porcquin);
        }
      }







    /* var cantidad;
    cantidad = prompt("Cantidad de libros comprados");
    cantidad = parseInt(cantidad);
    var precio;
    precio = prompt("Precio total de los libros");
    precio = parseInt(precio);
    var tarjeta;
    tarjeta = confirm("Pagara con tarjeta");


    if(cantidad > 2 && precio > 2000){
            precio = precio - (precio * 25) / 100;
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
*/
}
// quedo pendiente arreglar los porcentajes. (el primero esta bien)
