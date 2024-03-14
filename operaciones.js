const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {
    let object = { nombre: nombre, edad: edad, animal: animal, color: color, enfermedad: enfermedad }
    let citas = JSON.parse(fs.readFileSync('citas.json'))
    citas.push(object)
    fs.writeFileSync('citas.json', JSON.stringify(citas))
}

const leer = () => {
    const content = fs.readFileSync('citas.json', 'utf8')
    const stringToObject = JSON.parse(content)
    console.log(stringToObject)
}

module.exports = {
    registrar,
    leer,
}