/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var cant, marca, prec, descto, impu;
function CalcularPrecio () 
{
     cant = parseInt(document.getElementById("Cantidad").value);
     prec = cant * 35;
     
     
       if(cant >= 6){
            descto = (prec * 50) / 100;
            document.getElementById("precioDescuento").value = (prec - descto);
        }else{
            if(cant == 5 && document.getElementById("Marca").value == "ArgentinaLuz"){
                descto = (prec * 40) / 100;
                document.getElementById("precioDescuento").value = (prec - descto);
            }else{
                if(cant == 5 && document.getElementById("Marca").value != "ArgentinaLuz"){
                    descto = (prec * 30) / 100;
                    document.getElementById("precioDescuento").value = (prec - descto);
                }else{
                    if(cant == 4 && (document.getElementById("Marca").value == "ArgentinaLuz" || document.getElementById("Marca").value == "FelipeLamparas")){
                        descto = (prec * 25) / 100;
                        document.getElementById("precioDescuento").value = (prec - descto);
                    }else{
                        if(cant == 4 && (document.getElementById("Marca").value != "ArgentinaLuz" || document.getElementById("Marca").value != "FelipeLamparas")){
                            descto = (prec * 20) / 100;
                            document.getElementById("precioDescuento").value = (prec - descto);
                        }else{
                            if(cant == 3 && document.getElementById("Marca").value == "ArgentinaLuz"){
                                descto = (prec * 15) / 100;
                                document.getElementById("precioDescuento").value = (prec - descto);
                            }else{
                                if(cant == 3 && document.getElementById("Marca").value == "FelipeLamparas"){
                                    descto = (prec * 10) / 100;
                                    document.getElementById("precioDescuento").value = (prec - descto);
                                }else{
                                    if(cant == 3 && document.getElementById("Marca").value != "FelipeLamparas" && document.getElementById("Marca").value != "ArgentinaLuz"){
                                        descto = (prec * 5) / 100;
                                        document.getElementById("precioDescuento").value = (prec - descto);
                                    }
                                        }
                                    }
                                }                  
                           }
                     }
                }
            }
            if(document.getElementById("precioDescuento").value > 120){
                impu = (document.getElementById("precioDescuento").value * 10) / 100;
                document.getElementById("precioDescuento").value = "Usted pago " + document.getElementById("precioDescuento").value + impu + " siendo " + ((document.getElementById("precioDescuento").value * 10) / 100) + " el impuesto que pago.";
            }
}
    
