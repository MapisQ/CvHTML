console.log("Hoja de Vida Interactiva Cargada");

const Idiomas = ["Inglés A2", "Francés B1"];
const certificaciones = ["Certificado Fundamentos de Programación con Python",
 "Certificado Internacional de Lengua Francesa DELF A2",
  "Certificado Internacional de Lengua Francesa DELF A1"];

function mostrarIdiomas() {
    let ul = document.getElementById('listaIdiomas');
    
    for (let i = 0; i < Idiomas.length; i++) {
        let li = document.createElement('li');
        li.textContent = Idiomas[i];
        ul.appendChild(li);
    }

    alert("Función ejecutada correctamente");
}

window.onload = mostrarIdiomas(); // Sin paréntesis

function añadirHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
}
document.getElementById('addSkill').addEventListener('click', añadirHabilidad);




function mostrarCertificaciones() {
     // Solicitar al usuario la cantidad de proyectos a ver
     const cantidadcertificaciones = prompt("¿Cuántos proyectos deseas ver?");
            
     // Verificar si el usuario ingresó un número válido
     if (cantidadcertificaciones !== null && !isNaN(cantidadcertificaciones) && cantidadcertificaciones !== "") {
         // Convertir la cantidad ingresada a un número entero
         const cantidad = parseInt(cantidadcertificaciones);
         
         // Verificar si la cantidad ingresada es válida
         if (cantidad > 0 && cantidad <= certificaciones.length) {
             // Mostrar los proyectos solicitados
             for (let i = 0; i < cantidad; i++) {
                 alert(certificaciones[i]);
             }
         } else {
             alert("La cantidad ingresada no es válida.");
         }
    }
}
document.getElementById("certificaciones").addEventListener("click", mostrarCertificaciones);
