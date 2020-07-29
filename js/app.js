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

// Tipos de datos: String o Cadenas de texto
var saludo = "Hola mundo"
var grito = 'Ayudaaaa!'
var frase = "El sistema sanitario se vería desbordado 'dentro de algunas semanas', remarcó Gines."
var edad = 30
var edadtxt = String(edad)

// Tipos de datos: Booleanos
var estado = true // or false
var mayor = Boolean(10 < 9)

// Tipos de datos: Fechas
var fecha = new Date()
console.log(fecha)
console.log(fecha.getDay()) // Muestra el número del día
console.log(fecha.getFullYear()) // Muestra el año
console.log(fecha.getMinutes()) // Muestra los minutos de la hora corriente

// JSON: Javascript Object Notation
// Es un formator de intercambio de datos. Utiliza la estructura de un objeto
var persona = {nombre: 'Ricardo', twitter: 'ryszardDZC'}
var grupo = [
    {nombre: 'Juan', avatar: 'JuanVigneau'},
    {nombre: 'Facundo', avatar: 'Facu1108'},
    {nombre: 'Brian', avatar: 'CrobatTheOne'},
    persona
]

// Convertimos el objeto a texto
var convert = JSON.stringify(grupo)

// Convirtiendo una cadena a JSON
var revert = JSON.parse(convert)
