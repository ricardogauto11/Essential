// Código síncrono bloqueante
(() => {
    console.log('Código síncrono')
    console.log('Inicio')

    function two() {
        console.log('two')
    }

    function one() {
        console.log('one')
        two()
        console.log('three')
    }

    one()
    console.log('Fin')
})();

console.log('');

// Código asíncrono no bloqueante
(() => {
    console.log("Código asíncrono")
    console.log("Inicio")

    function two() {
        setTimeout(function () {
            console.log("two")
        }, 1000)
    }

    function one() {
        setTimeout(function () {
            console.log("one")
        }, 0)
        two()
        console.log("three")
    }

    one()
    console.log("Fin")
})();