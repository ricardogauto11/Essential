console.log('*** Elementos del documento ***')
console.log(document)

console.log(`Accedemos a las etiquetas mediante la notación del punto (document.head)`)
console.log(document.head)
console.log(document.body)
console.log(document.title)


console.log(`Para acceder a la etiqueta html`)
console.log(document.documentElement)

console.log(`Obtenemos los enlaces`)
console.log(document.links)

console.log(`Juego de caracteres que tiene el documento`)
console.log(document.characterSet)

console.log(`Imágenes`)
console.log(document.images)

console.log(`Hojas de estilo`)
console.log(document.styleSheets)

console.log(`Scripts`)
console.log(document.scripts)

console.log(`Obtener lo que seleccionamos con el mouse`)
setTimeout(() => {
    console.log(document.getSelection().toString())
}, 3000)

// let text = ""
// const speak = (text) => {
//     speechSynthesis.speak(new SpeechSynthesisUtterance(text))
// }

// speak(text)

console.clear()
console.log('*** Atributos y data-attributes ***')

console.log(`Accediendo al atributo lang de la etiqueta html:`, document.documentElement.lang)
console.log(`Otra manera de acceder al atributo: `, document.documentElement.getAttribute('lang'))
console.log(`Capturando el atributo href de DOM con la notación del punto:`, document.querySelector('.link-dom').href)
console.log(`Capturando el atributo href de DOM con getAttribute():`, document.querySelector('.link-dom').getAttribute('href'))

console.log(`Cambiando el valor de los atributos`)
// Atributo lang con la notación del punto:
document.documentElement.lang = "es-AR"

//Atributo lang con setAttribute():
document.documentElement.setAttribute("lang", "es-MX")

// Las variables con el signo $ hacen referencia a que almacenan un elemento del dom
const $link_dom = document.querySelector('.link-dom')

// Establecemos atributos que no contiene el elemento
$link_dom.setAttribute("target", "_blank")
$link_dom.setAttribute("rel", "noopener") // No existe dependencia entre la ventana que estamos abriendo y sitio de origen
$link_dom.setAttribute("href", "https://www.linkedin.com/in/ricardogauto11/")

// Podemos validar si un atributo existe o no en el elemento: hasAttribute
console.log(`El enlace tiene el atributo 'href'?`, $link_dom.hasAttribute("href"))

// Podemos eliminar atributos: removeAttribute
$link_dom.removeAttribute("target")

$link_dom.setAttribute("target", "_blank")

// Data attributes:
console.log(`Obteniendo el valor del data attribute, data-description:`, $link_dom.getAttribute("data-description"))

// Todos los data-attributes se guardan como una collection js la cual se llama dataset
console.log($link_dom.dataset)

// Para obtener un data attribute en particular
console.log($link_dom.dataset.description)
console.log($link_dom.dataset.id)

// Seteamos un data-attribute con setAttribute
$link_dom.setAttribute("data-name", "link-dom")

// Seteamos un data-attribute con la notación del punto
$link_dom.dataset.description = "Conectemos!"

// Tiene data-attributo
$link_dom.hasAttribute("data-id")

// Eliminamos data-attribute
$link_dom.removeAttribute("data-id")