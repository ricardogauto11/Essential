// funciones asincronas: Esperan que una condición se cumpla para poder seguir ejecutando el proceso.

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

async function testAsync() {
    try {
        console.log('Inicio Async Declared')

        let obj = await sqrtPromise(5)
        console.log(`Async: ${obj.value}, ${obj.result}`)

        obj = await sqrtPromise(6)
        console.log(`Async: ${obj.value}, ${obj.result}`)

        obj = await sqrtPromise(7)
        console.log(`Async: ${obj.value}, ${obj.result}`)

        console.log('Fin Async Declared')
    } catch (err) {
        console.error(err)
    }
}

testAsync()

const testAsyncAwait = async () => {
    try {
        console.log('Inicio Async Expressed')

        let obj = await sqrtPromise(8)
        console.log(`Async: ${obj.value}, ${obj.result}`)

        obj = await sqrtPromise(9)
        console.log(`Async: ${obj.value}, ${obj.result}`)

        obj = await sqrtPromise(10)
        console.log(`Async: ${obj.value}, ${obj.result}`)

        console.log('Fin Async Expressed')
    } catch (err) {
        console.error(err)
    }
}

testAsyncAwait()