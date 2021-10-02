import greet, { HelloWorld, PI, user, greet2 } from './constant.js'
import { arithmetic as ar } from './arithmetic.js'

console.log('Módulos import y export')
console.log(PI)
console.log(ar.add(4, 3))
console.log(user)
console.log(greet2)
greet()

let greeting = new HelloWorld()
greeting