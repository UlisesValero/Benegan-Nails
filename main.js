//Toda la informacion que sea depositada en la caja de comentarios, sea guardada en el localstorage
//En el momento que el cliente clickee en el boton "enviar" le tiene que aparecer un cartel que diga "Gracias por dejarnos tu comentario, nos estaremos comunicando en la brevedad"

function obtenerNombre() {
    const cajaNombre = document.getElementById('full-name-box');
    cajaNombre.addEventListener("input", function () {
        const nombreUsuario = this.value;
        localStorage.setItem("nombreUsuario", nombreUsuario);
    })
};
obtenerNombre()

function obtenerCorreo() {
    const cajaCorreo = document.getElementById('e-mail-box');
    cajaCorreo.addEventListener("input", function () {
        const correoElectronico = this.value; 
        localStorage.setItem("correoElectronico", correoElectronico);
    })
};
obtenerCorreo()

function obtenerTelefono() {
    const cajaTelefono = document.getElementById('number');
    cajaTelefono.addEventListener("input", function () {
        const numeroTelefonico = this.value;
        localStorage.setItem("numeroTelefonico", numeroTelefonico);
    })
};
obtenerTelefono()




function validarNombre() {
    const cajaNombre = document.getElementById('full-name-box');
    const nombreCompleto = cajaNombre.value.trim();
    const palabras = nombreCompleto.split(" ").filter(palabra => palabra !== "");
    if (palabras.length >= 2) {
        //si es correcto y el resto de datos cumplen el formato, mostrar pestaña "Gracias por dejarnos tu comentario, nos estaremos comunicando en la brevedad"
        localStorage.setItem("nombreUsuario", nombreCompleto);
        return true;
    } else {
        return false;
        //si es incorrecto, marcar con un asterisco rojo al lado del campo "Nombre completo"
    }
}
document.getElementById("boton-enviar").addEventListener("click", validarNombre);

function validarCorreo(){
    const cajaCorreo = document.getElementById('e-mail-box');
    const correoElectronico = cajaCorreo.value
    const arroba = "@";
    if (correoElectronico.includes(arroba)){
        return true;
        //si es correcto y el resto de datos cumplen el formato, mostrar pestaña "Gracias por dejarnos tu comentario, nos estaremos comunicando en la brevedad"
    }else {
        return false;
        //si es incorrecto, marcar con un asterisco rojo al lado del campo "Nombre completo"
    }
}
document.getElementById("boton-enviar").addEventListener("click", validarCorreo);


function validarTelefono(){
    const cajaTelefono = document.getElementById('number');
    const numeroTelefonico = cajaTelefono.value;
    if(isNaN(parseInt(numeroTelefonico)) || numeroTelefonico == ""){
         return false;
        //si es incorrecto, marcar con un asterisco rojo al lado del campo "Nombre completo"
    }else{
        return true;
        //si es correcto y el resto de datos cumplen el formato, mostrar pestaña "Gracias por dejarnos tu comentario, nos estaremos comunicando en la brevedad"
    }
}
document.getElementById('boton-enviar').addEventListener("click", validarTelefono);



function validacionDatos (){
    if(validarTelefono() && validarCorreo() && validarNombre()){
        document.querySelector('.mostrar-texto-aprobacion').style.opacity = "1"
    }
}

