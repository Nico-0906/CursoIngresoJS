function mostrar()
{

    for(numero=0; numero!=9; ){
        numero = prompt("ingrese numero");
        while(isNaN(numero)){
            numero = prompt("Reingrese el numero");
        }
    }

}//FIN DE LA FUNCIÓN