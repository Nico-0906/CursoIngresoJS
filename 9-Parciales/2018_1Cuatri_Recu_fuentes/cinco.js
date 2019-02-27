function mostrar()
{
/*
  var precio;
  precio = prompt("ingrese el precio de la habitacion");
  var pago;
  pago = prompt("ingrese el tipo de pago; 1-Visa 2-Paypal 3-Mercadopago 4-Efectivo 5-Otros");
  var paquete;
  paquete = prompt("elija el paquete que desee: 1- todoincluido 2- soloDesayunos 3- otros");
  var desctopago;
  var desctpaque;

  switch(pago){
    case 1:
    case 3:
      desctopago = precio*10/100;
      alert("paga ")
      break;
    case 2:
      desctopago = precio*15/100;
      break;
    case 4:
      desctopago = precio*20/100;
      break;
    case 5:
      desctopago = precio*5/100;
      break;
  }
*/
  /*
      switch(tipo){
        clase "mercadopago":
        clase "visa":
          desc = precio * 0.1;
          break;
        clase "paypal":
          switch(paquete){
            case "todo":
              desc = precio* 0.25;
              break;                 (ESTE ESTA INCOMPLETO NO LLEGUE A COPIAR, BORRO. REHACER ESTE EJERCICIO
                                      -INVESTIGAR SOBRE COMANDO: "DEBUGGER" -- ESTA MAL HECHO MAL MAL MAL MAL)
          }
        case "efectivo":
          switch(paquete){
            clase "desayunos":
              desc = precio * 0.3;
              break;
            case "todoincluido":
              desc = precio * 0.35;
              break;
            default:
              desc = precio * 0.2;
          }
      }
  */
/*
  switch(paquete){
    case 1:
      if(pago == 2){
        desctpaque = desctopago*10/100;
        alert("Usted pago con Paypal y tiene un 10% de dscto. Paga " + desctpaque);
      }else{
        if(pago == 4){
          desctpaque = desctopago*15/100;
          alert("usted pago con efectivo y tiene un 15% de dscto. Paga " + desctpaque);
        }
      }
      break;
    case 2:
      if(pago == 4){
        desctpaque = desctopago*10/100;
        alert("usted pago con efectivo y eligio el paquete soloDesayunos, tiene un 10% mas de dscto. " + desctpaque);
      }
      break;
  }
*/

/*
var uno;
uno = prompt("ingrese primer importe");
uno = parseInt(uno);
var dos;
dos = prompt("ingrese segundo importe");
dos = parseInt(dos);
var tres;
tres = prompt("ingrese tres importe");
tres = parseInt(tres);
var cuatro;
cuatro = prompt("ingrese cuarto importe");
cuatro = parseInt(cuatro);
*/
var contador = 0;
var ingresado = 0;
var diezporc;
var cincporc,
var quincporc;

diezporc = ingresado*10/100;
cincporc = ingresado*5/100;
quincporc = ingresado*15/100;

while(contador<4){
  ingresado = ingresado + prompt("ingrese numero");
  ingresado = parseInt(ingresado);
  contador++;
}//ESTA MAL REHACER CON EL EJEMPLO DEL PROFESOR QUE ESTA ABAJO.
if(ingresado>=100){
  alert(ingresado - diezporc);
}else{
  if(ingresado>=50 && ingresado<100){
    alert(ingresado - cincporc);
  }else{
    alert(ingresado + quincporc);
  }
}
/*
  var cont = 0;
  var mayor;
  var orden;

  while(cont<4){
    cont++;
    do{
      num=prompt();
      num=parseInt(num);
    }while(esNaN(num));
    if(cont == 1){
      orden = cont;
      mayor = num;
    }else{
      if(num>mayor){
        orden = cont;
        mayor=num;
      }
    }
  }







}
