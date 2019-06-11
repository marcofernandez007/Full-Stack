let countries = ["Palabra de cineasta","Recordar Contraseña","Diseño Grafico y Pensamiento Visual","Dialogos de Roma","Modernist cuisine","Tormenta de Espadas"
,"El Gran Cuadro","El Celler de Can Roca","El Mundo y sus Demoníos","Los Bandidos","Choque de Reyes","Breves Respuestas a las Grandes Preguntas"
,"Bocusa","Story Telling (Como Estrategia de Comuinicacion)","La Chispa Creativa","El diseño como Storyteling","The Professional Chef"
,"Juego de Tronos","Tragedias Completas","historias que marcan","LaRouse","El Nacimiento de la Especie","El Mundo Azul Ama el Caos"
,"Diseño Gráfico Nuevos Fundamentos"];

let cajaBusqueda = document.getElementById("myInput");
let btnBuscar = document.getElementById('submit-buscador');
let contenido = document.getElementById('myInput');
let informacion = document.getElementById('informacion');

autocomplete( cajaBusqueda, countries);

function autocomplete(inp, arr) {

  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
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

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});

}

btnBuscar.addEventListener('click', miFuncion);

let librosJson = {
	"libros":[
	{'nombre':'Dialogos de Roma', 'precio':200,'autor':'Francisco de Holanda','url':'/lib.arte1.html'},
	{'nombre':'Juego de Tronos', 'precio':300,'autor':'sr. anonimus boom 2','url':'/test2'}
	]
};

function miFuncion(e){
	e.preventDefault();

	let infoLibros="";
	for (let i = 0; i < librosJson.libros.length; i++) {
		if (contenido.value === librosJson.libros[i].nombre) {
			infoLibros +=  "<br>Nombre del libro: "+librosJson.libros[i].nombre + "<br>"
						        + "Autor: "+librosJson.libros[i].autor + "<br>"
                    + "Precio: $"+librosJson.libros[i].precio + "<br>"
                    + `<br> <button onclick="otraPagina('`+librosJson.libros[i].url+`')"> ver informacion</button><br><br>`;
			break;
		}
	}
	mostrarInformacion(infoLibros);
}

function mostrarInformacion(libro){
	
	informacion.innerHTML="";
	if (libro != "") {
		informacion.innerHTML += libro + `<button onclick="cerrarInfo()"> Cerrar</button><br><br>`;
	}
}

function otraPagina(e){
	window.location=e;
}

function cerrarInfo(){
  informacion.innerHTML="";
}
