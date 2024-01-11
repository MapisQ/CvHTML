console.log("Hoja de Vida Interactiva Cargada");

const Idiomas = ["Inglés A2", "Francés B1"];

function mostrarIdiomas() {
    let ul = document.getElementById('listaIdiomas'); // Suponiendo que tienes un <ul id="listaCertificaciones"> en tu HTML
    
    for (let i = 0; i < Idiomas.length; i++) {
        let li = document.createElement('li');
        li.textContent = Idiomas[i];
        ul.appendChild(li);
    }

    window.alert = (" función ejecutada correctamente");
}

window.onload = mostrarIdiomas();

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


