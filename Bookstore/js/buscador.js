let countries = ["Palabra de cineasta", "Recordar Contrasena", "Diseno Grafico y Pensamiento Visual", "Dialogos de Roma", "Modernist cuisine", "Tormenta de Espadas", "El Gran Cuadro", "El Celler de Can Roca", "El Mundo y sus Demoníos", "Los Bandidos", "Choque de Reyes", "Breves Respuestas a las Grandes Preguntas", "Bocusa", "Story Telling (Como Estrategia de Comuinicacion)", "La Chispa Creativa", "El diseño como Storyteling", "The Professional Chef", "Juego de Tronos", "Tragedias Completas", "historias que marcan", "LaRouse", "El Nacimiento de la Especie", "El Mundo Azul Ama el Caos", "Diseño Gráfico Nuevos Fundamentos"];

let cajaBusqueda = document.getElementById("myInput");
let btnBuscar = document.getElementById('submit-buscador');
let contenido = document.getElementById('myInput');
let informacion = document.getElementById('informacion');

autocomplete(cajaBusqueda, countries);

function autocomplete(inp, arr) {

    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { //up
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {

        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);

        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {

        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });

}

btnBuscar.addEventListener('click', miFuncion);

let librosJson = {
    "libros": [
        { 'nombre': 'Palabra de cineasta', 'precio': 100, 'autor': 'autor1', 'url': './lib.arte2.html' },
        { 'nombre': 'Recordar Contrasena', 'precio': 100, 'autor': 'autor2', 'url': './libLit1.html' },
        { 'nombre': 'Diseno Grafico y Pensamiento Visual', 'precio': 100, 'autor': 'autor3', 'url': './libDis1.html' },
        { 'nombre': 'Dialogos de Roma', 'precio': 100, 'autor': 'autor4', 'url': './lib.arte1.html' },
        { 'nombre': 'Modernist cuisine', 'precio': 100, 'autor': 'autor5', 'url': './libGasuno.html' },
        { 'nombre': 'Tormenta de Espadas', 'precio': 100, 'autor': 'autor6', 'url': './libLit2.html' },
        { 'nombre': 'El Gran Cuadro', 'precio': 100, 'autor': 'autor7', 'url': './libciencia5.html' },
        { 'nombre': 'El Celler de Can Roca', 'precio': 100, 'autor': 'autor8', 'url': './libGasdos.html' },
        { 'nombre': 'El Mundo y sus Demoníos', 'precio': 100, 'autor': 'autor9', 'url': './libciencia1.html' },
        { 'nombre': 'Los Bandidos', 'precio': 100, 'autor': 'autor10', 'url': './lib.arte4.html' },
        { 'nombre': 'Choque de Reyes', 'precio': 100, 'autor': 'autor11', 'url': './libLit3.html' },
        { 'nombre': 'Breves Respuestas a las Grandes Preguntas', 'precio': 100, 'autor': 'autor12', 'url': './libciencia2.html' },
        { 'nombre': 'Bocusa', 'precio': 100, 'autor': 'autor13', 'url': './libGastres.html' },
        { 'nombre': 'Story Telling (Como Estrategia de Comuinicacion)', 'precio': 100, 'autor': 'autor14', 'url': './libDis2.html' },
        { 'nombre': 'La Chispa Creativa', 'precio': 100, 'autor': 'autor15', 'url': './libciencia3.html' },
        { 'nombre': 'El diseño como Storyteling', 'precio': 100, 'autor': 'autor16', 'url': './libDis3.html' },
        { 'nombre': 'The Professional Chef', 'precio': 100, 'autor': 'autor17', 'url': './libGascuatro.html' },
        { 'nombre': 'Juego de Tronos', 'precio': 100, 'autor': 'autor18', 'url': './libLit4.html' },
        { 'nombre': 'Tragedias Completas', 'precio': 100, 'autor': 'autor19', 'url': './lib.arte5.html' },
        { 'nombre': 'historias que marcan', 'precio': 100, 'autor': 'autor20', 'url': './libDis4.html' },
        { 'nombre': 'LaRouse', 'precio': 100, 'autor': 'autor21', 'url': './libGascinco.html' },
        { 'nombre': 'El Nacimiento de la Especie', 'precio': 100, 'autor': 'autor22', 'url': './libciencia4.html' },
        { 'nombre': 'El Mundo Azul Ama el Caos', 'precio': 100, 'autor': 'autor23', 'url': './libLit5.html' },
        { 'nombre': 'Diseño Gráfico Nuevos Fundamentos', 'precio': 100, 'autor': 'autor24', 'url': './libDis5.html' }
    ]
};

function miFuncion(e) {
    e.preventDefault();

    let infoLibros = "";
    for (let i = 0; i < librosJson.libros.length; i++) {
        if (contenido.value === librosJson.libros[i].nombre) {

            infoLibros += "<span class='miSpan'> Nombre del libro: </span>  <span class='miSpan2'>" + librosJson.libros[i].nombre + "</span> <br>" +
                "<span class='miSpan'> Autor: </span> <span class='miSpan2'>" + librosJson.libros[i].autor + " </span><br>" +
                "<span class='miSpan' > Precio: </span> <span class='miSpan2'> $" + librosJson.libros[i].precio + "</span><br>" +
                `<br> <button class='btnBuscar' onclick="otraPagina('` + librosJson.libros[i].url + `')"> ver informacion</button><br><br>`;

            break;
        }
    }
    mostrarInformacion(infoLibros);
}

function mostrarInformacion(libro) {

    informacion.innerHTML = "";
    if (libro != "") {
        informacion.innerHTML += libro + `<button class='btnCerrar' onclick="cerrarInfo()"> Cerrar</button><br><br>`;
    }
}

function otraPagina(e) {
    console.log('otra', e);
    window.location = e;
}

function cerrarInfo() {
    informacion.innerHTML = "";
}