// Las promesas son como una sentencia if else que tienen dos recursos principales: resolve y reject
// Si la promesa se cumple se ejecuta el recurso resolve y sino se ejecuta el recurso reject.

function sqrtPromise(value) {
    if (typeof value !== 'number') {
        return Promise.reject(`Error el valor ${value} no es un número`)
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000)
    })
}

sqrtPromise(2)
    .then(obj => {
        console.log('Inicio promise')
        console.log(`Promise: ${obj.value}, ${obj.result}`)

        return sqrtPromise(3)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)

        return sqrtPromise('b')
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)

        return sqrtPromise(5)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)

        console.log('Fin promise')
    })
    .catch(err => console.error(err))