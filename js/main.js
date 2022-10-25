
//objetos y array
const evento1 = {tipo:"Boda", precio: 80000};
const evento2 = {tipo:"15 años", precio: 50000};
const evento3 = {tipo:"Cumpleaños", precio: 25000};
const evento4 = {tipo:"otro festejo", precio: 20000};

const nroInv1 = {nro:"50/80 invitados", precio2: 25000};
const nroInv2 = {nro:"100/150 invitados", precio2: 60000};
const nroInv3 = {nro:"200/250 invitados", precio2: 80000};
const nroInv4 = {nro:"mas de 250 invitados", precio2: 130000};


otrosServicios=[{nombre:"bautismo", realizamos: "si"}, {nombre:"comunion", realizamos: "si"}, {nombre:"bar mitzvah", realizamos: "si"}, {nombre:"bat mitzvah", realizamos: "si"}, {nombre:"corporativos", realizamos: "si"}, {nombre:"empresariales", realizamos: "si"}, {nombre:"cocktail", realizamos: "si"}, {nombre:"despedidas", realizamos: "si"}, {nombre:"egresados", realizamos: "si"}, {nombre:"infantiles", realizamos: "si"}, {nombre:"pool party", realizamos: "si"}, {nombre:"eventos fuera del pais", realizamos: "no"}, {nombre:"alquiler de equipos", realizamos: "no"}, {nombre:"karaoke", realizamos: "no"}, {nombre:"animacion", realizamos: "no"}];


const eventos = document.getElementById("opcionesEvento"), invitados = document.getElementById("opcionesInvitados"), infoEnvio = document.getElementById('formulario'), finalMessage = document.getElementsByClassName('mensajeFinal'), infoName = document.getElementById("infoName"), emailInfo = document.getElementById("infoMail"), inputBusqueda = document.getElementById("inputSearch"), btnBusqueda = document.getElementById("btnSearch");

var opcion1;
var opcion2;

//inputs con options
eventos.addEventListener('change',() => {
    console.log("cambio de opcion");
    opcion1 = eventos.options[eventos.selectedIndex].value;
});

invitados.addEventListener('change',() => {
    console.log("cambio de opcion");
    opcion2 = invitados.options[invitados.selectedIndex].value;
});


//funciones tipo evento y cantidad de inv
function precioEventos(opcion1){
    if(opcion1 == 'Boda'){
        return evento1;
    } else if (opcion1 == '15 años'){
        return evento2;
    } else if (opcion1 == 'Cumpleaños'){
        return evento3;
    } else {
        return evento4;
    }
};

function precioInvitados(opcion2){
    if(opcion2 == '50/80'){
        return nroInv1;
    } else if (opcion2 == '100/150'){
        return nroInv2;
    } else if (opcion2 == '200/250'){
        return nroInv3;
    } else {
        return nroInv4;
    }
};

//funcion segun las opciones que elija el usuario al enviar + guardado de info
function infoFinal(){
    if(opcion1 == 'default' || opcion2 == 'default' || infoName.value == "" || emailInfo.value == "") {
        finalMessage[0].innerText = "Elegi una opcion y/o completa todos los campos";
    } else {
        finalMessage[0].innerText = "Gracias! La opcion que elegiste es " + opcion1 + " para una cantidad de " + opcion2 + " invitados aprox." + ", con un valor aprox de $" + (precioEventos(opcion1).precio + precioInvitados(opcion2).precio2 + ". Nos contactaremos lo mas pronto posible.");
    }
};

function aGuardar(){
    let cliente = { nombre: infoName.value, mail: emailInfo.value};
        localStorage.setItem("datos", JSON.stringify(cliente));

        const evJSON = JSON.stringify(opcion1);
            sessionStorage.setItem('evento', evJSON);
        const invJSON = JSON.stringify(opcion2);
            sessionStorage.setItem('invitados', invJSON);
};


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    infoFinal();
    aGuardar();
});


//seccion busqueda
function filtrarServicio(arr, filtro){
    const filtrado = arr.filter((servicio)=>{
        return servicio.nombre.includes(filtro);
    })
    return filtrado;
};

btnBusqueda.addEventListener('click', () =>{
    let resultado = filtrarServicio(otrosServicios, inputBusqueda.value.toLowerCase())
    finalMessage[1].innerHTML = `
    <p>Resultado: ${resultado[0].nombre}</p>
    <p>Lo realizamos?: ${resultado[0].realizamos}</p>`
});


