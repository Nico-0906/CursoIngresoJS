function mostrar()
{
var clave = prompt("ingrese el número clave.");
var cont = 0;

while(clave != "utn750"){
    cont++;
    alert("clave incorrecta");
    if(cont < 3){
    clave = prompt("Ingrese clave nuevamente");
    continue;
    }
    break;
}

}//FIN DE LA FUNCIÓN
