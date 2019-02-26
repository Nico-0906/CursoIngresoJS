function mostrar()
{
var numero;
numero = prompt("ingrese el numero");
numero = parseInt(numero);
while(isNaN(numero)){
        numero = prompt("reingrese el numero");
    }
var contador = 0;

for(pares = 0; pares <= numero; pares = pares + 2){
    contador++;
    alert(pares);
}
alert("La cantidad de pares son " + contador);
}//FIN DE LA FUNCIÓN