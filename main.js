//Toda la informacion que sea depositada en la caja de comentarios, sea guardada en el localstorage
//En el momento que el cliente clickee en el boton "enviar" le tiene que aparecer un cartel que diga "Gracias por dejarnos tu comentario, nos estaremos comunicando en la brevedad"

function obtenerNombre() {
    const cajaNombre = document.getElementById('full-name-box');
    cajaNombre.addEventListener("input", function () {
        const nombreUsuario = this.value;
        localStorage.setItem("nombreUsuario", nombreUsuario);
    });
}
obtenerNombre();

function obtenerCorreo() {
    const cajaCorreo = document.getElementById('e-mail-box');
    cajaCorreo.addEventListener("input", function () {
        const correoElectronico = this.value;
        localStorage.setItem("correoElectronico", correoElectronico);
    });
}
obtenerCorreo();

function obtenerTelefono() {
    const cajaTelefono = document.getElementById('number');
    cajaTelefono.addEventListener("input", function () {
        const numeroTelefonico = this.value;
        localStorage.setItem("numeroTelefonico", numeroTelefonico);
    });
}
obtenerTelefono();

function obtenerComentario(){
    const cajaComentario = document.getElementById('suggestion-box');
    cajaComentario.addEventListener("input", function(){
        const comentario = this.value;
        localStorage.setItem("comentario", comentario);
    });
}
obtenerComentario();


function validarNombre() {
    const cajaNombre = document.getElementById('full-name-box');
    const nombreError = document.querySelector('.name-error');
    const nombreCompleto = cajaNombre.value.trim();
    const palabras = nombreCompleto.split(" ").filter(palabra => palabra !== "");
    if (palabras.length >= 2) {
        localStorage.setItem("nombreUsuario", nombreCompleto);
        return true;
    } else {
        nombreError.style.visibility = 'visible';
        return false;
    }
}

function validarCorreo() {
    const cajaCorreo = document.getElementById('e-mail-box');
    const correoError = document.querySelector('.mail-error');
    const correoElectronico = cajaCorreo.value.trim();
    const arroba = "@";
    if (correoElectronico.includes(arroba)) {
        return true;
    } else {
        correoError.style.visibility = 'visible';
        return false;
    }
}


function validarTelefono() {
    const cajaTelefono = document.getElementById('number');
    const telefonoError = document.querySelector('.number-error')
    const numeroTelefonico = cajaTelefono.value.trim();
    if (isNaN(parseInt(numeroTelefonico)) || numeroTelefonico === "") {
        telefonoError.style.visibility = 'visible';
        return false;
    } else {
        return true; 
    }
}

function validacionDatos() {
    const textoAprobacion = document.querySelector('.mostrar-texto-aprobacion');
    if (validarTelefono() && validarCorreo() && validarNombre()) {
        textoAprobacion.style.visibility = 'visible';
    }else{
        alert("Ingresa correctamente los datos en los campos marcados.")
        }
}

document.getElementById("boton-enviar").addEventListener("click", function (event) {
    event.preventDefault();
    validacionDatos();
});
