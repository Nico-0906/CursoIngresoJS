function mostrar()
{
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

}
