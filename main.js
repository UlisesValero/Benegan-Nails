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
    const nombreCompleto = cajaNombre.value.trim();
    const palabras = nombreCompleto.split(" ").filter(palabra => palabra !== "");
    if (palabras.length >= 2) {
        localStorage.setItem("nombreUsuario", nombreCompleto);
        cajaNombre.classList.remove('invalid')
        return true;
    } else {
        cajaNombre.classList.add('invalid')
        return false;
    }
}

function validarCorreo() {
    const cajaCorreo = document.getElementById('e-mail-box');
    const correoElectronico = cajaCorreo.value.trim();
    const arroba = "@";
    if (correoElectronico.includes(arroba)) {
        cajaCorreo.classList.remove('invalid')
        return true;
    } else {
        cajaCorreo.classList.add('invalid')
        return false;
    }
}


function validarTelefono() {
    const cajaTelefono = document.getElementById('number');
    const numeroTelefonico = cajaTelefono.value.trim();
    if (isNaN(parseInt(numeroTelefonico)) || numeroTelefonico === "") {
        cajaTelefono.classList.add('invalid')
        return false;
    } else {
        cajaTelefono.classList.remove('invalid')
        return true; 
    }
}

function validacionDatos() {
    const textoAprobacion = document.querySelector('.mostrar-texto-aprobacion');
    let telefonoValido = validarTelefono()
    let correoValido = validarCorreo()
    let nombreValido = validarNombre()
    if (telefonoValido && correoValido && nombreValido) {
        textoAprobacion.style.visibility = 'visible';
    }
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault()
    validacionDatos()
    return true
});