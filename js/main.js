//objetos

const evento1 = {tipo:"Boda", precio: 80000};
const evento2 = {tipo:"15 años", precio: 50000};
const evento3 = {tipo:"Cumpleaños", precio: 25000};
const evento4 = {tipo:"otro festejo"};

const nroInv1 = {nro:"50/80 invitados", precio2: 25000};
const nroInv2 = {nro:"100/150 invitados", precio2: 60000};
const nroInv3 = {nro:"200/250 invitados", precio2: 80000};
const nroInv4 = {nro:"mas de 250 invitados", precio2: 130000};

//Array

otrosServicios=[{nombre:"bautismo", realizamos: "si"}, {nombre:"comunion", realizamos: "si"}, {nombre:"bar mitzvah", realizamos: "si"}, {nombre:"bat mitzvah", realizamos: "si"}, {nombre:"corporativos", realizamos: "si"}, {nombre:"empresariales", realizamos: "si"}, {nombre:"cocktail", realizamos: "si"}, {nombre:"despedidas", realizamos: "si"}, {nombre:"egresados", realizamos: "si"}, {nombre:"infantiles", realizamos: "si"}, {nombre:"pool party", realizamos: "si"}, {nombre:"eventos en el exterior", realizamos: "no"}, {nombre:"alquiler de equipos", realizamos: "no"}, {nombre:"karaoke", realizamos: "no"}, {nombre:"animacion", realizamos: "no"}];

//Funciones
function saludo(nombre) {
    alert(nombre + " para presupuestar tu evento necesitamos saber:")
};

var opcion2;

function infoInvitados() {
    opcion2 = prompt("Selecciona cantidad de invitados: \n1-50-80 \n2-100-150 \n3-200-250 \n4-+250");
                if (opcion2 < "5" && opcion2 > "0") {
                    prompt("Ingresa tu email para poder contactarte:");
                } else {
                    alert("volve a intentar");
                }
};

function cantidadInvitados(opcion2){
    if(opcion2 == "1"){
        return nroInv1;
    } else if (opcion2 == "2"){
        return nroInv2;
    } else if (opcion2 == "3"){
        return nroInv3;
    } else {
        return nroInv4;
    }
};

function mensajeFinal(tipoEvento){
    alert("Gracias! La opcion que elegiste es " + tipoEvento.tipo + " para " + cantidadInvitados(opcion2).nro + ", con un valor aprox de $" + (tipoEvento.precio + cantidadInvitados(opcion2).precio2) + ". Te enviaremos el presupuesto lo mas pronto posible. Si te equivocaste en alguna opcion o necesitas cotizar otro evento volve a realizar el cuestionario o elegi la opcion SALIR");
};

function otrosServicios(nombre, realizamos){
    this.nombre=nombre;
    this.realizamos=realizamos;
};

function filtrarEvento(arr, filtro){
    const filtrado = arr.filter((servicio)=>{
        return servicio.nombre.includes(filtro);
    })
    return filtrado;
};


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
                mensajeFinal(evento1);
                break;
            case "2":
                infoInvitados();
                mensajeFinal(evento2);
                break;
            case "3":
                infoInvitados();
                mensajeFinal(evento3);
                break;
            case "4":
                infoInvitados();
                alert("Gracias! La opcion que elegiste es " + evento4.tipo + " para " + cantidadInvitados(opcion2).nro + ". Nos pondremos en contacto contigo lo mas pronto posible para saber mas sobre tu evento y asi poder enviarte el presupuesto. Si te equivocaste en alguna opcion o necesitas cotizar otro evento volve a realizar el cuestionario o elegi la opcion SALIR");
                break;
    

    default:
        alert("ingresa una opcion correcta")
        break;
            }
            opcion = prompt(
                "Selecciona la opcion correcta: \n1- Boda \n2-15 Años \n3-Cumpleaños \n4-Otro festejo \n\nPara SALIR seleciona 5");           
};

let dato=prompt("Queres saber si realizamos algun otro servicio?? Ingresa la opcion que necesites");

console.log(filtrarEvento(otrosServicios, dato));