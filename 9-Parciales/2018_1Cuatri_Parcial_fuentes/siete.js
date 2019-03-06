function mostrar()
{
var nota;
var sexo;
var contador = 0;
var sumanotas = 0;
var promedio = 0;
var min;
var primera = true;
var aux;
var contadorhombre = 0;
while(contador < 5){
    contador++;
    nota = prompt("ingrese nota");
    nota = parseInt(nota);
    if(nota < 0 || nota > 10){
        nota = prompt("Reingrese nota entre 0 y 1");
        nota = parseInt(nota);
    }else{
        if(sexo == "M" && nota >= 6){
            contadorhombre++;
        }
        if(primera){
            primera = false;
            min = nota;
        }else{
            if(nota < min){
                min = nota;
                aux = sexo;
            }
        }
        sumanotas = sumanotas + nota;
    }
    sexo = prompt("ingrese sexo F/M ");
    if(sexo != "F" && sexo != "M"){
        sexo = prompt("Reingrese sexo valido");
    }
}
promedio = Math.round(sumanotas / 5);
alert("El promedio de las notas totales es " + promedio);
alert("La nota mas baja es " + min + " y el sexo de esa persona es " + aux);
alert("La cantidad de varones que su nota fue igual o mayor a 6 es de " + contadorhombre);
}
