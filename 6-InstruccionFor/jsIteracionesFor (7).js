function mostrar()
{
    var numero;
    numero = prompt("ingrese un numero");
    numero = parseInt(numero);
    var contador=0;
    for(var divisores=1 ; divisores < numero; divisores++){

        if(numero % divisores == 0){
            contador++;
            alert(divisores);
        }
    }
    alert("Cantidad de numeros divisores encontrados " + contador);

}//FIN DE LA FUNCIÓN