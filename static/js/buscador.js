// id del searched

//**********descomentar texto json solo de prueba***************
// const productos = [
// 	{nombre: "mata", valor: 500},
// 	{nombre: "palo", valor: 1500},
// 	{nombre: "piedra", valor: 2500},
// 	{nombre: "raton", valor: 3500},
// 	{nombre: "tijera", valor: 4500}
// ]


const searched = document.querySelector("#searched");
const boton = document.querySelector("#busqueda");
const resultado = document.querySelector("#resultado");

const filtrar =() =>{
	resultado.innerHTML = "";
	console.log(searched.value); //Accede a lo que se escribe en el input de busqueda
	const texto = searched.value.toLowerCase();
	for(producto of productos){
		let nombre=producto.nombre.toLowerCase();
		if(nombre.indexOf(texto) !== -1){
			resultado.innerHTML += `
			<li>${producto.nombre} - valor: ${producto.valor} </li>
			`
		}
	}
	if(resultado.innerHTML === ""){
		resultado.innerHTML += `
			<li>Producto no encontrado...</li>
		`
	}
}

boton.addEventListener("click", filtrar)
searched.addEventListener("keyup", filtrar)
filtrar();	