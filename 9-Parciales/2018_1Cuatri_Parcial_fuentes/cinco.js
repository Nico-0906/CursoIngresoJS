function mostrar()
{
var planeta;
planeta = prompt("Ingrese un planeta del sistema solar.");

switch(planeta){
    case "tierra":
    alert("Aca vivimos");
    break;

    case "mercurio":
    case "venus":
    alert("Aca hace mas calor");
    break;

    case "saturno":
    case "neptuno":
    case "urano":
    case "pluton":
    case "jupiter":
    case "marte":
    alert("Aca hace mas frio.");
    break;
    
    default:
    alert("No es un planeta valido");
    break;
    }

}
