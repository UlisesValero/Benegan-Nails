//#region turnos

let turnosReservados = [];

const formularioTurnos = document.getElementById("formularioTurnos")
const listaTurnos = document.getElementById("listaTurnos")

function renderizarTurnos(){
    listaTurnos.innerHTML = "";
    turnosReservados.forEach((turno, index) => {
        const li = document.createElement("li")
        li.textContent = `${turno.nombre} (${turno.numeroTelefonico}) ${turno.fecha} ${turno.hora} - ${turno.servicio}`
        const btnEliminarTurno = document.createElement("button")
        btnEliminarTurno.textContent = "Eliminar"
        btnEliminarTurno.addEventListener("click", () => eliminarTurno(index));
        li.appendChild(btnEliminarTurno);
        listaTurnos.appendChild(li);
    });
    almacenarInformacion();
}

function reservarTurno(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreApellido').value;
    const numeroTelefonico = document.getElementById('numeroTelefonico').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const servicio = document.getElementById('servicios').value;

    if (nombre && numeroTelefonico && fecha && hora && servicio) {
        turnosReservados.push({ nombre, numeroTelefonico, fecha, hora, servicio });
        renderizarTurnos();
        formularioTurnos.reset();
    }
}

function eliminarTurno(index) {
    turnosReservados.splice(index, 1);
    renderizarTurnos();
}

function almacenarInformacion(){
    localStorage.setItem("turnos", JSON.stringify(turnosReservados));
}

function devolverInformacion(){
    const turnosAlmacenados = localStorage.getItem("turnos");
    if(turnosAlmacenados){
        turnosReservados = JSON.parse(turnosAlmacenados);
        renderizarTurnos();
    }
}

formularioTurnos.addEventListener("submit", reservarTurno);

window.onload = devolverInformacion;

//#endregion   