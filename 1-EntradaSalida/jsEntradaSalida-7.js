/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primero = document.getElementById("numeroUno").value; 
    var segundo = document.getElementById("numeroDos").value;
    parseInt(primero);
    parseInt(segundo);
    var resultado = primero + segundo;
   alert(resultado);
}

function restar()
{
	var primero = document.getElementById("numeroUno").value; 
    var segundo = document.getElementById("numeroDos").value;
    parseInt(primero);
    parseInt(segundo);
    var resultado = primero - segundo;
   alert(resultado);
}

function multiplicar()
{ 
	var primero = document.getElementById("numeroUno").value; 
    var segundo = document.getElementById("numeroDos").value;
    parseInt(primero);
    parseInt(segundo);
    var resultado = primero * segundo;
   alert(resultado);
}

function dividir()
{
	var primero = document.getElementById("numeroUno").value; 
    var segundo = document.getElementById("numeroDos").value;
    parseInt(primero);
    parseInt(segundo);
    var resultado = primero / segundo;
   alert(resultado);
}

