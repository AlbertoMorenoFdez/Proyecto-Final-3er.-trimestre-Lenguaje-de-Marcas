var modo = leerModoActual();

if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}

function leerModoActual() {
    let modo = window.localStorage.getItem("modoGuardado");
    if (!modo) {
        //Devolvera modo DIA si no hay modo guradado
        modo = "dia";
    };
    return modo;

}

function ponerModoDia() {
    // cambiamos los colores, ponemos el fondo claro y letras oscuras
    let todo = document.getElementById("todo");
    todo.style.color = "black";
    todo.style.backgroundColor = "white";
    window.localStorage.setItem("modoGuardado", "dia");

    let banner = document.getElementById("banner")
    if (banner) {

        banner.style.color = "darkred";
        banner.style.backgroundColor = "goldenrod";
    }

    // ocultamos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";

    // mostramos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";

}

function ponerModoNoche() {
    // cambiamos los colores, ponemos el fondo oscuro y letras blancas
    let todo = document.getElementById("todo");
    todo.style.color = "white";
    todo.style.backgroundColor = "black";

    let banner = document.getElementById("banner");
    if (banner) {
        banner.style.color = "goldenrod";
        banner.style.backgroundColor = "darkred";
    }
    window.localStorage.setItem("modoGuardado", "noche");

    // mostramos el sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";

    // ocultamos la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
} 

function aplicarCambios() {
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.getElementById('mensaje').innerHTML = "APLICADO";

    // Guardar los valores seleccionados en localStorage
    localStorage.setItem("colorSeleccionado", color.value);
    localStorage.setItem("tamFuenteSeleccionado", tamelegido);
}

// Cargar los valores seleccionados al cargar la página
function cargarValoresSeleccionados() {
    var colorSeleccionado = localStorage.getItem("colorSeleccionado");
    var tamFuenteSeleccionado = localStorage.getItem("tamFuenteSeleccionado");
  
    if (colorSeleccionado) {
      document.documentElement.style.setProperty("--colorNormal", colorSeleccionado);
    }
  
    if (tamFuenteSeleccionado) {
      document.documentElement.style.fontSize = parseFloat(tamFuenteSeleccionado) + "rem";
    }
   
  }
  
  document.addEventListener('DOMContentLoaded', cargarValoresSeleccionados);

/* document.addEventListener("DOMContentLoaded", function () {
    var botonAjuste = document.querySelector(".botonAjuste");
    var imagen = document.querySelector(".cuadrado .imagenMTB");

    botonAjuste.addEventListener("click", function () {
        imagen.style.opacity = "0.3";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var botonAjuste = document.querySelector(".botonAjuste");
    var imagen = document.querySelector(".cuadrado .imagenROAD");

    botonAjuste.addEventListener("click", function () {
        imagen.style.opacity = "0.3";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var botonAjuste = document.querySelector(".botonAjuste");
    var imagen = document.querySelector(".cuadrado .imagenEBIKE");

    botonAjuste.addEventListener("click", function () {
        imagen.style.opacity = "0.3";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var botonAjuste = document.querySelector(".botonAjuste");
    var imagen = document.querySelector(".cuadrado .imagenURBAN");

    botonAjuste.addEventListener("click", function () {
        imagen.style.opacity = "0.3";
    });
}); */



function redirigir() {
    window.location.href = "portada bicicletas.html";
}

// Función para mostrar el nombre del usuario
function mostrarNombreUsuario() {
    var nombreUsuario = sessionStorage.getItem("nombreUsuario");
    var nombreUsuarioElemento = document.getElementById("nombreUsuario");

    if (nombreUsuario) {
        nombreUsuarioElemento.textContent = "Registrado como "+nombreUsuario;
    } else {
        nombreUsuarioElemento.textContent = "Sin identificar";
    }
}

// Función para guardar el nombre del usuario en sessionStorage
function guardarNombreUsuario() {
    var nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombreUsuario", nombre);
}

// Llamar a la función al cargar la página
window.onload = function() {
    mostrarNombreUsuario();
    document.getElementById("nombre").addEventListener("input", guardarNombreUsuario);
};

function alertaNombreUsuario(){
    var nombre=document.getElementById("nombre").value
    alert("Te has registrado con el nombre de usuario: " + nombre);
}
