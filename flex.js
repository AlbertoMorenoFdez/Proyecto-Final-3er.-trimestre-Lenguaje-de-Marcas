'use strict' //Nos ayuda a no dejar pasar ningun error

//pedimos el numero de cuadro donde excribir: HOLA 
var cuadro = prompt("Dime en que cuadro quieres saludar (1 a 5)", "");
cuadro = parseInt(cuadro);
// cuadro sera una variable numerica entre 1 y 5

//Creamos una variable para unir cuadro y el selector
var selector="c"+cuadro;

var estecuadro= document.getElementById(selector);
estecuadro.innerHTML="HOLA"