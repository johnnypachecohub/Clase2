const segundero = document.querySelector(".segundero")
const minutero = document.querySelector(".minutero")
const horario = document.querySelector(".horario")

const desplazaSegundero = 360/60;  // se desplazara 6 grados cada segundo
const desplazaMinutero = 360/3600;  //se desplazara 0.1 grados por segundo
const desplazaHorario = 360/(12*60*60)   //para dar una vuelta cada 12 horas en 360 grados

const fechaTiempo = new Date()
const horas = fechaTiempo.getHours()
const minutos = fechaTiempo.getMinutes()
const segundos = fechaTiempo.getSeconds()

let anguloSegundero = -90 + segundos * desplazaSegundero  //para q aparezca el segundo actual
let anguloMinutero = -90 + minutos * 60 * desplazaMinutero
let anguloHorario = -90 + horas * 60 * 60 * desplazaHorario

const mover = () => {
	anguloSegundero += desplazaSegundero
	anguloMinutero += desplazaMinutero
	anguloHorario += desplazaHorario

	segundero.style.transform = `rotate(${anguloSegundero}deg)`
	minutero.style.transform = `rotate(${anguloMinutero}deg)`
	horario.style.transform = `rotate(${anguloHorario}deg)`
}

setInterval(function() {
	mover()
}, 1000)

mover()
