// función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// function charCounter(phrase = "") {
//     if (!phrase) {
//         console.warn("No ingresaste ninguna cadena")
//     } else {
//         console.info(`La cadena "${phrase}" contiene ${phrase.length} caracteres`)
//     }
// }

const charCounter = (cadena = "") =>
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" contiene ${cadena.length}`);

charCounter("Bienvenido al mundo javascript")



// función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const croppedText = (text = "", long = undefined) =>
    (!text)
    ? console.warn("No ingresaste texto")
    : (long === undefined)
        ? console.warn("No ingresaste longitud para recortar el texto")
        : console.info(text.slice(0, long))

croppedText("Bienvenido al mundo de javascript",)
croppedText("", 2)
croppedText("Bienvenido al mundo de javascript", 12)



// función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const converToArray = (phrase = "", separator = undefined) =>
    (!phrase)
    ? console.warn("No ingresaste ningun texto")
    : (separator === undefined)
        ? console.warn("No ingresaste separador")
        : console.info(phrase.split(separator))

converToArray("Separando texto con el método split", " ")



// función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repeatText = (text = "", times = undefined) => {
    if (!text) return console.warn("No ingresaste ningun texto")

    if (times === undefined) return console.warn("No ingresaste el número de veces a repetir")

    if (times === 0) return console.error("El número de veces no puede ser 0")

    if (Math.sign(times) === -1) return console.error("El número de veces no puede ser negativo")

    for (let i = 1; i <= times; i++) {
        console.info(`${text} ${i}`)
    }
}

repeatText("I Miss you", 4)