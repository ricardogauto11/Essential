"use strict"

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