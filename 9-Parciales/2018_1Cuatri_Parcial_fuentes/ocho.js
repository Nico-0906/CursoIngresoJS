function mostrar()
{
var numero;
var letra;
var contadorpar = 0;
var contadorimpar = 0;
var contadorcero = 0;
var positivo = 0;
var contadorpositivo = 0;
var negativo = 0;
var primero = true;
var maximo;
var minimo;
var maxl;
var minl;

while(confirm("desea seguir ingresando?")){
numero = prompt("Ingrese numero");
numero = parseInt(numero);
if(numero < -100 || numero > 100){
    numero = prompt("numero invalido, reingrese numero");
}else{
    if(numero == 0){
        contadorcero++;
    }
}
if(numero % 2 == 0){
    contadorpar++
}else{
    contadorimpar++;
}
letra = prompt("ingrese letra");
if(numero > 0){
    positivo = positivo + numero;
    contadorpositivo++;
}else{
    negativo = negativo + numero;
}
if(primero){
    primero = false;
    maximo = numero;
    minimo = numero;
}else{
    if(numero > maximo){
        maximo = numero;
        maxl = letra;

    }else{
        if(numero < minimo){
            minimo = numero;
            minl = letra;
        }
    }
}
}

document.writeln("1- La cantidad de numeros pares son " + contadorpar);
document.writeln("  2- La cantidad de numeros impares son " + contadorimpar);
document.writeln("   3- La cantidad de ceros es " + contadorcero);
document.writeln("   4- El promedio de los numeros positivos ingresados es " + Math.round((positivo / contadorpositivo)*10)/100);
document.writeln("   5- La suma de todos los numeros negativos es " + negativo);
document.writeln("   6- El numero y letra del maximo es " + maximo + maxl + " y del minimo es " + minimo + minl);
}

