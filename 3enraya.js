'use strict'
alert('Alberto Moreno 1º DAW dice:\n ¡Bienvenido al Juego de Tres en Raya!');
function oscurecer(identificador) {
    console.log("Se ha llamado a la función oscurecer con el identificador: " + identificador);
    let cuadrado = document.getElementById(identificador);
    cuadrado.style.backgroundColor = "#2f010e";

}

function aclarar(identificador) {
    let cuadrado = document.getElementById(identificador);
    cuadrado.style.backgroundColor = "";
}

let turno = 1;
let tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let jugadorActual = 'X';
let contadorTurnos = 0;

function pintarSimbolo(identificador) {
    let cuadrado = document.getElementById(identificador);
    if (cuadrado.innerHTML === '') {
        cuadrado.innerHTML = jugadorActual;
        cuadrado.style.fontSize = "5em";
        contadorTurnos++;
        if (hayGanador()) {
            alert('¡Ha ganado el jugador ' + jugadorActual + '!');
            reiniciarJuego();
        } else if (contadorTurnos === 9) {
            alert('¡El juego ha terminado en empate!');
            reiniciarJuego();
        } else {
            jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
        }
    }
}


function hayGanador() {
    let simbolo;
    // Comprobar filas
    for (let i = 1; i <= 3; i++) {
        simbolo = document.getElementById('c' + i + '1').innerHTML;
        if (simbolo !== '' &&
            simbolo === document.getElementById('c' + i + '2').innerHTML &&
            simbolo === document.getElementById('c' + i + '3').innerHTML) {
            return true;
        }
    }
    // Comprobar columnas
    for (let i = 1; i <= 3; i++) {
        simbolo = document.getElementById('c1' + i).innerHTML;
        if (simbolo !== '' &&
            simbolo === document.getElementById('c2' + i).innerHTML &&
            simbolo === document.getElementById('c3' + i).innerHTML) {
            return true;
        }
    }
    // Comprobar diagonales
    simbolo = document.getElementById('c11').innerHTML;
    if (simbolo !== '' &&
        simbolo === document.getElementById('c22').innerHTML &&
        simbolo === document.getElementById('c33').innerHTML) {
        return true;
    }
    simbolo = document.getElementById('c13').innerHTML;
    if (simbolo !== '' &&
        simbolo === document.getElementById('c22').innerHTML &&
        simbolo === document.getElementById('c31').innerHTML) {
        return true;
    }
    // Si no se ha encontrado ganador, devolver false
    return false;
}

function reiniciarJuego() {
    jugadorActual = 'X';
    contadorTurnos = 0;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            let cuadrado = document.getElementById('c' + i + j);
            cuadrado.innerHTML = '';
            cuadrado.style.fontSize = "";
            cuadrado.style.backgroundColor = "";
        }
    }
}