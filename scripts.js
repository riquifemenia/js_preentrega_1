
let fecha
do {
    fecha = prompt("Ingresá tu día de nacimiento (AAAA/MM/DD)")
} while (!esFechaValida(fecha))

const FECHA_NACIMIENTO = Date.parse(fecha)

let edad = calcularEdad(FECHA_NACIMIENTO)
let diaNacimiento = calcularDiaSemana(FECHA_NACIMIENTO)
let diasDesdeNacimiento = calcularDiasDesdeFecha(FECHA_NACIMIENTO)

alert("Tenés " + edad + " años\nNaciste un día " + diaNacimiento + "\nHan pasado " + diasDesdeNacimiento + " días desde que naciste")


function esFechaValida(fecha) {
    const HOY = new Date()
    const FECHA = new Date(fecha)
    return (!isNaN(FECHA.getTime())) && (FECHA.getTime() < HOY.getTime())
}

function calcularEdad(nacimiento) {
    const HOY = new Date()
    const FECHA_NAC = new Date(nacimiento)
    let edad = HOY.getFullYear() - FECHA_NAC.getFullYear()
    let mes = HOY.getMonth() - FECHA_NAC.getMonth()

    if (HOY.getDate() < FECHA_NAC.getDate()) {
        edad--
    }

    return edad
}

function calcularDiaSemana(fecha) {
    const FECHA = new Date(fecha)
    const DIA_SEMANA = FECHA.getDay()

    let nombreDiaSemana
    switch (DIA_SEMANA) {
        case 0:
            nombreDiaSemana = "Domingo"
            break
        case 1:
            nombreDiaSemana = "Lunes"
            break
        case 2:
            nombreDiaSemana = "Martes"
            break
        case 3:
            nombreDiaSemana = "Miércoles"
            break
        case 4:
            nombreDiaSemana = "Jueves"
            break
        case 5:
            nombreDiaSemana = "Viernes"
            break
        case 6:
            nombreDiaSemana = "Sábado"
            break
        default:
            nombreDiaSemana = "Error: día de la semana inválido"
    }
    return nombreDiaSemana
}

function calcularDiasDesdeFecha(fecha) {

    const HOY = new Date()
    const FECHA = new Date(fecha)
    let contadorDias = 0

    while (FECHA.getTime() < HOY.getTime()) {
        FECHA.setDate(FECHA.getDate() + 1)
        contadorDias++
    }
    return contadorDias
}

