// Recibe una función (callback) que va a ejecutar una sola vez y un tiempo expresado en milisegundos
console.log('Después de dos segundos se ejecuta el setTimeout')
let timer = setTimeout(() => {
    console.log('Ejecutando setTimeout')
}, 2000)

// Recibe una función (callback) que se ejecuta en un intervalo de tiempo expresado en milisegundos
let watch = setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 5000)

clearTimeout(timer)
console.log('Después del setTimeout')

clearInterval(watch)
console.log('Después del setInterval')
