/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primernumero = document.getElementById("numeroDividendo").value;
    var segundonumero = document.getElementById("numeroDivisor").value;
    parseInt(primernumero, segundonumero);
    var resto = primernumero / segundonumero;
    alert(resto);
}
