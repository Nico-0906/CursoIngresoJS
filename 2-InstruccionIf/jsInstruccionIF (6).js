function mostrar()
{
//tomo la edad  

if(document.getElementById("edad").value >= 18){
    alert("Es mayor de edad");
}else if(document.getElementById("edad").value > 13 && document.getElementById("edad").value <= 17){
    alert("Es adolecente");
}else{
    alert("Es niño");
}


}//FIN DE LA FUNCIÓN