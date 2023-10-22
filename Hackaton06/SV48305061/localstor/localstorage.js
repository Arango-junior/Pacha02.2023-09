window.onload = guardado;

function guardado() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", registrar);
    let boton_pago = document.getElementById("boton_pago");
    boton_pago.addEventListener("click", pagos);
    let boton_diagnostico=document.getElementById("insertar_diagnostico");
    boton_diagnostico.addEventListener("click", asignar_diagnosticos);
    let boton_tecnico=document.getElementById("insertar_tecnico");
    boton_tecnico.addEventListener("click", asginar_tecnico)
    let boton_estado=document.getElementById("insertar_estado");
    boton_estado.addEventListener("click", ver_estados)
}
function registrar() {
    let nombre = document.getElementById("nombres");
    let apellido = document.getElementById("apellidos");
    let dni = document.getElementById("dnis");
    let marca = document.getElementById("marcas");
    let imei = document.getElementById("imeis");

    let lista_nombre = [];
    let lista_apellido = [];
    let lista_dni = [];
    let lista_marca = [];
    let lista_imei = [];
    lista_nombre.push(nombre.value)
    lista_apellido.push(apellido.value)
    lista_dni.push(dni.value)
    lista_marca.push(marca.value)
    lista_imei.push(imei.value)
    localStorage.nombre = lista_nombre;
    localStorage.apellido = lista_apellido;
    localStorage.dni = lista_dni;
    localStorage.marca = lista_marca;
    localStorage.imei = lista_imei;

    mostra_registro();
}
function mostra_registro() {
    let nombre = document.getElementById("registro_nombre");
    nombre.innerHTML = "Nombres: " + localStorage.nombre;
    let apellido = document.getElementById("registro_apellido");
    apellido.innerHTML = "Apellidos: " + localStorage.apellido;
    let dni = document.getElementById("registro_dni");
    dni.innerHTML = "DNI: " + localStorage.dni;
    let marca = document.getElementById("registro_marca");
    marca.innerHTML = "Marca de telefono: " + localStorage.marca;
    let imei = document.getElementById("registro_imei");
    imei.innerHTML = "IMEI: " + localStorage.imei;
}

function asignar_diagnosticos() {
    let diagnostico= document.getElementById("diagnostico1");
    let lista_diag=[];
    lista_diag.push(diagnostico.value);
    localStorage.diagnostico=lista_diag;
    
}
//Se tiene que ver en el estado para que el cliente mire
function mostrar_diagnostico() {
    let diagnostico1=document.getElementById("verestado")
    diagnostico1.innerHTML= "Primera revision: "+ localStorage.diagnostico
}

function pagos() {
    let pago = document.getElementById("pago1");
    let pago_cliente = document.getElementById("pago_cliente");
    let lista_pago = [];
    let lista_pagocliente = [];
    lista_pago.push(pago.value)
    lista_pagocliente.push(pago_cliente.value)
    localStorage.pago = lista_pago;
    localStorage.pago_cliente = lista_pagocliente;
    mostra_pago();

}

function mostra_pago() {
    let pago_pagar = document.getElementById("registro_pago");
    pago_pagar.innerHTML = "Primer pago: " + localStorage.pago;
    let pagar_cliente = document.getElementById("registro_pago_cliente")
    pagar_cliente.innerHTML = "Pago realizado del cliente: " + localStorage.pago_cliente;
}

function asginar_tecnico() {
    let tecnico;
    if (localStorage.marca=="sangsum") {
        tecnico=document.getElementById("ver_tecnico")
        tecnico.innerHTML="Tecnico asignado Roberto experto en "+localStorage.marca;
    }if(localStorage.marca=="lg"){
        tecnico=document.getElementById("ver_tecnico")
        tecnico.innerHTML="Tecnico asignado Arturo experto en "+localStorage.marca;
    }if (localStorage.marca=="apple") {
        tecnico=document.getElementById("ver_tecnico")
        tecnico.innerHTML="Tecnico asignado Jose experto en "+localStorage.marca;
    }if (localStorage.marca=="huewei") {
        tecnico=document.getElementById("ver_tecnico")
        tecnico.innerHTML="Tecnico asignado Juan experto en "+localStorage.marca;
    }if (localStorage.marca=="motorola") {
        tecnico=document.getElementById("ver_tecnico")
        tecnico.innerHTML="Tecnico asignado Juan experto en "+localStorage.marca;
    }
}
function ver_estados(){
    let estado;
if (localStorage.imei!= undefined) {
    estado= document.getElementById("verestado");
    estado.innerHTML="Paso el registro"
}else if (localStorage.imei== undefined && localStorage.pago_cliente== undefined) {
    estado= document.getElementById("verestado");
    estado.innerHTML="Paso el pago exitosamente"
}

}
function asignar_costos_extrar() {
    
}

