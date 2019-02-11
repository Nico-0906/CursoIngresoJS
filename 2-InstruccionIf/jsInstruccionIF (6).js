function mostrar()
{
//tomo la edad  

if(document.getElementById("edad").value <= 13){
    alert("Es niño");
}else{
    if(document.getElementById("edad").value >= 18) {
        alert("Es mayor de edad");
    }else{
    alert("Es adolecente");
    }
    
}

}//FIN DE LA FUNCIÓN