function mostrar()
{

var numero = 0;
numero= prompt("ingrese un numero");
numero = parseInt(numero);
var primo = true;

for(i=2; i < numero; i++){
    if(numero % i == 0){
        primo = false;
   }
}
    if(primo == true){
        alert("el numero es primo");
    }else{
        alert("no es un numero primo");
    }

}//FIN DE LA FUNCIÓN