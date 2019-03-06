function mostrar()
{
  var marca;
  var peso;
  var temp;
  var canttemppar = 0;
  var primerp = true;
  var pesado;
  var contador = 0;
  var prodpesado;
  var contcer = 0;
  var aux = 0;
  var minimo = 0;
  var maximo = 0;
  var producto;
while(confirm("Desea ingresar producto?")){
marca = prompt("ingrese la marca");
peso = prompt("ingrese peso");
peso = parseInt(peso);
if(peso>100 || peso<1){
  peso = prompt("reingrese peso entre 1 y 100");
  peso = parseInt(peso);
}else{
  if(primerp){
    primerp=false;
    pesado = peso;
    minimo = peso;
    prodpesado = marca;
  }else{
    if(peso > pesado){
      prodpesado = marca;
      pesado = peso;
    }else{
      if(peso < minimo){
        minimo = peso;
      }
    }
  }
}
temp = prompt("ingrese temperatura");
if(temp>30 || temp<-30){
  temp = prompt("Reingrese temperatura entre 30 y -30");
}else{
  if(temp < 0){
    contcer++;
  }
}
temp = parseInt(temp);
if(temp % 2 == 0){
  canttemppar++;
}
aux = aux + peso;
contador++;
}
producto = aux / contador;
producto = Math.round(producto);
document.writeln("A - La cantidad de temperaturas pares son " + canttemppar);
document.writeln("     B - La marca del producto mas pesado es " + prodpesado);
document.writeln("     C - La cantidad de productos que se conservan a menos de 0 grados son " + contcer);
document.writeln("     D - El promedio del peso de todos los productos es " + producto);
document.writeln("     E - El peso maximo es " + pesado + " y el peso minimo es " + minimo);
}
