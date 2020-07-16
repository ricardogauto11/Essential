"use strict"

// Variables globales y locales
var name = "Ricardo"
console.log(name)

function saludo() {
    let name = "Juan"
    console.log(name)

    let edad = 34
    console.log(edad)
}

saludo()

// Tipos de datos: numéricos
var año = 2020 // número natural
var imp = 30.50 // número decimal o punto flotante

var count = "100" // Es de tipo Texto por estar entre comillas
// Para cambiar el tipo de dato podemos usar las siguientes funciones:
var num_count = Number(count) // Tipo numérico
var int_count = parseInt(count) // Tipo Entero
var float_count = parseFloat(count) // Tipo flotante