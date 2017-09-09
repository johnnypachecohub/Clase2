const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
	input.addEventListener("mousemove", function() {
		const valor = this.value
		const propiedad = this.getAttribute("id")
		const unidades = this.dataset.unidades   //otra forma de obtener atributos de la forma "data-"

		document.documentElement.style.setProperty(`--${propiedad}`, `${valor}${unidades}`)
	})
	//el mousemove no funciona en una tablet, se añade "touchmove"
	
});