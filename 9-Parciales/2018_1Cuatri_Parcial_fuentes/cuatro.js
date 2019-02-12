function mostrar()
{
 var numeroUno = prompt("Primer numero");
 var numeroDos = prompt("Segundo numero");

 if(numeroUno == numeroDos){
     alert(numeroUno + numeroDos);
    }else{
     parseInt(numeroUno);
     parseInt(numeroDos);
        if(numeroUno > numeroDos){
         alert(numeroUno - numeroDos);
             }else{
        var suma = numeroUno + numeroDos;
        alert(suma);
                 if(suma > 10){
         alert("la suma es " + suma + " y supero el 10");
     }
 }
 }
}
