function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.random()*10;
	if(nota == 9 || 10 ){
		alert("EXCELENTE");
	}else if(nota >= 4 && nota < 9){
		alert("APROBO");
	}else{
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN