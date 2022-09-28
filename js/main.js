
var opcion2;
//Funciones
function saludo(nombre) {
    alert(nombre + " para presupuestar tu evento necesitamos saber:")
}

function infoInvitados() {
    opcion2 = prompt("Selecciona cantidad de invitados: \n1-50-80 \n2-100-150 \n3-200-250 \n4-+250");
                if (opcion2 < "5" && opcion2 > "0") {
                    prompt("Ingresa tu email para poder contactarte:");
                } else {
                    alert("volve a intentar");
                }
}

function tipoEvento(opcion){
    if(opcion == "1"){
        return "Boda";
    } else if (opcion == "2"){
        return "15 años";
    } else if (opcion == "3") {
        return "Cumpleaños";
    } else {
        return "otro festejo";
    }
}

function cantidadInvitados(opcion2){
    if(opcion2 == "1"){
        return "50/80 invitados";
    } else if (opcion2 == "2"){
        return "100/150 invitados";
    } else if (opcion2 == "3"){
        return "200/250 invitados";
    } else {
        return "mas de 250 invitados";
    }
}

//Pedido de nombre
let nombre = prompt(
    "Hola, ingresa tu nombre");

saludo(nombre);

//Cuestionario
let opcion = prompt(
    "Selecciona la opcion que corresponde a tu evento: \n1- Boda \n2-15 Años \n3-Cumpleaños \n4-Otro festejo \n\nPara SALIR seleciona 5");

    while (opcion != "5") {
        switch (opcion) {
            case "1":
                infoInvitados();
                alert("Gracias! La opcion que elegiste es " + tipoEvento(opcion) + " para " + cantidadInvitados(opcion2) + ". Te enviaremos el presupuesto lo mas pronto posible. Si te equivocaste en alguna opcion o necesitas cotizar otro evento volve a realizar el cuestionario o elegi la opcion SALIR");
                break;
            case "2":
                infoInvitados();
                alert("Gracias! La opcion que elegiste es " + tipoEvento(opcion) + " para " + cantidadInvitados(opcion2) + ". Te enviaremos el presupuesto lo mas pronto posible. Si te equivocaste en alguna opcion o necesitas cotizar otro evento volve a realizar el cuestionario o elegi la opcion SALIR");
                break;
            case "3":
                infoInvitados();
                alert("Gracias! La opcion que elegiste es " + tipoEvento(opcion) + " para " + cantidadInvitados(opcion2) + ". Te enviaremos el presupuesto lo mas pronto posible. Si te equivocaste en alguna opcion o necesitas cotizar otro evento volve a realizar el cuestionario o elegi la opcion SALIR");
                break;
            case "4":
                infoInvitados();
                alert("Gracias! La opcion que elegiste es " + tipoEvento(opcion) + " para " + cantidadInvitados(opcion2) + ". Te enviaremos el presupuesto lo mas pronto posible. Si te equivocaste en alguna opcion o necesitas cotizar otro evento volve a realizar el cuestionario o elegi la opcion SALIR");
                break;
    

    default:
        alert("ingresa una opcion correcta")
        break;
            }
            opcion = prompt(
                "Selecciona la opcion correcta: \n1- Boda \n2-15 Años \n3-Cumpleaños \n4-Otro festejo \n\nPara SALIR seleciona 5");           
}
