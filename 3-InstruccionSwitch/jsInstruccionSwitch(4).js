function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
    case "Febrero":
    alert("Tienen 29 dias.");
    break;
    
    default:
    alert("Tienen 31 dias o mas");
    break;

}


}//FIN DE LA FUNCIÓN