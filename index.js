const {registrar, leer} = require('./operaciones.js')  

const argumentos = process.argv.slice(2)

const operacion = argumentos[0]
const nombre = argumentos[1]
const edad = argumentos[2]
const animal = argumentos[3]
const color = argumentos [4]
const enfermedad = argumentos [5]

if (argumentos[0] === "registrar" && argumentos.length === 6)  {
    registrar(nombre, edad, animal, color,enfermedad)
    console.log("Registro exitoso")
} else if(argumentos[0] === "registrar" && argumentos.length < 6){
    console.log("Debe ingresar todos los datos de la mascota")
} else if (operacion === "leer") {
    leer()
} else {
    console.log("Debe ingresar una operación, registrar o leer")
}