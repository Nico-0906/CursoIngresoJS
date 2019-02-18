function mostrar()
{
    var total;
    var amigos;
    amigos = prompt("Cantidad de amigos");
    amigos=  parseInt(amigos);
    total = prompt("Total a pagar");
    total = parseInt(total);
    var iva = (total*21)/100;
    var propina = ((total + iva)*10)/100;
    var final = total + iva + propina;
    alert("Cada uno debe pagar " + (final / amigos));
}
