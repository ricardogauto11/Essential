// Callbacks: funcion que se ejecuta despues de otras funciones
function sqrtCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random() * 1000)
}

sqrtCallback(2, (value, res) => {
    console.log('Inicia callback')
    console.log(`Callback: ${value}, ${res}`)

    sqrtCallback(3, (value, res) => {
        console.log(`Callback: ${value}, ${res}`)

        sqrtCallback(4, (value, res) => {
            console.log(`Callback: ${value}, ${res}`)

            sqrtCallback(5, (value, res) => {
                console.log(`Callback: ${value}, ${res}`)

                sqrtCallback(6, (value, res) => {
                    console.log(`Callback: ${value}, ${res}`)

                    sqrtCallback(7, (value, res) => {
                        console.log(`Callback: ${value}, ${res}`)
                    })
                })
            })
        })
    })
})