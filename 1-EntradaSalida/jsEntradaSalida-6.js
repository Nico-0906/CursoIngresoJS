/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
   var primero = document.getElementById("numeroUno").value; 
   var segundo = document.getElementById("numeroDos").value;
    parseInt(primero);
    parseInt(segundo);
    var resultado = primero + segundo;
   alert(resultado);
}

