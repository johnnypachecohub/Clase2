let fechaTiempo = new Date()

const fechaNavidad = new Date("2017-12-25 00:00:00")

const tiempoTranscurrido1 = fechaTiempo.getTime()  // devuelve milisegundos desde 01-ene-1970

let redondear = Math.round(4.9)       //devuelve 5
let limiteInferior = Math.floor(4.9)  //devuelve 4 (entero inferior)
let limiteSuperior = Math.ceil(4.1)   //devuelve 5 (entero superior)



 
setInterval(function() {
	fechaTiempo = new Date()
	const tiempoTranscurrido = fechaTiempo.getTime()
	const tiempoNavidad = fechaNavidad.getTime()
	const tiempoRestante = tiempoNavidad - tiempoTranscurrido
	
	const segundosRestantes = tiempoRestante / 1000
	const diasRestantes = segundosRestantes /(24*3600)

	let horasRestantes = 0
	horasRestantes = 23*60 - fechaTiempo.getHours()*60 + fechaTiempo.getMinutes()
	horasRestantes = horasRestantes / 60

	let minutosRestantes = 0
	if(fechaTiempo.getMinutes() == 0) {
		minutosRestantes = 0
	}
	else {
		minutosRestantes = 59 - fechaTiempo.getMinutes()
	}
	
	let segundos = 0
	if(fechaTiempo.getSeconds() == 0) {
		segundos = 0
	}
	else {
		segundos = 59 - fechaTiempo.getSeconds()
	}
	
	console.log(Math.floor(diasRestantes) + "d " + Math.floor(horasRestantes) + "h " + Math.floor(minutosRestantes) + "m " + segundos + "s")
}, 1000)

