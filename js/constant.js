export const PI = Math.PI

export let user = "ryszard"
let password = "qwerty"

export const greet2 = () => console.log('Función expresada')

export default function greet() {
    console.log('Exportado función por defecto')
}

export class HelloWorld {
    constructor () {
        console.log('Exportando clase')
    }
}