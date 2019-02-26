function mostrar()
{

var numero = 0;
numero = prompt("ingrese un numero");
numero = parseInt(numero);
while(isNaN(numero)){
    numero = prompt("Reingrese un numero");
}
var primo = true;

for(i=2; i < numero; i++){
    if(numero % i == 0){
        primo = false;
   }
/*
for(i=1; i<=num; i++){
    if(num % i == 0){
        contador++;
    }
    if(contador == 2){                 ESTE HIZO EL PROFESOR Y ES MEJOR (MENOS CON EL 2)(HAY QUE CHEQUEAR
        alert("es primo");                          SI EL DOS ES PRIMO ANTES DE TODO ESTO)
    }else{
        alert("no es primo");
    }
}
*/
}
    if(primo == true){
        alert("el numero es primo");
    }else{
        alert("no es un numero primo");
    }

}//FIN DE LA FUNCIÓN
