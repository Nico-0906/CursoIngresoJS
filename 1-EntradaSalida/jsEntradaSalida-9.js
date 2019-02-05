/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var varsueldo = document.getElementById("sueldo").value;
    parseInt(varsueldo);
    var varresultado = varsueldo * 10;
    varresultado /= 100;
    document.getElementById("resultado").value = varsueldo + varresultado;
}
