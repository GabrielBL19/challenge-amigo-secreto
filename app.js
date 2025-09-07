// Declaro un arreglo para almacenar los nombres
var amigos = [];

// Defino variables para los elementos del DOM
var inputEl = document.getElementById('amigo');
var listaEl = document.getElementById('listaAmigos');
var resultadoEl = document.getElementById('resultado');

// Función para actualizar la lista en el DOM
function renderLista() {
	listaEl.innerHTML = '';
	if (amigos.length === 0) {
		listaEl.innerHTML = '<li>No hay amigos agregados.</li>';
		return;
	}
	for (var i = 0; i < amigos.length; i++) {
		var li = document.createElement('li');
		li.textContent = amigos[i];
		listaEl.appendChild(li);
	}
}

// Función para agregar un amigo
function agregarAmigo() {
	var nombre = inputEl.value.trim();
	if (nombre === '') {
		alert('Por favor escribe un nombre.');
		inputEl.focus();
		return;
	}
	amigos.push(nombre);
	inputEl.value = '';
	renderLista();
	resultadoEl.innerHTML = '';
}

// Función para sortear un amigo
function sortearAmigo() {
	if (amigos.length === 0) {
		alert('No hay nombres para sortear.');
		return;
	}
	var index = Math.floor(Math.random() * amigos.length);
	var elegido = amigos[index];
	resultadoEl.innerHTML = '<li>El amigo secreto es: ' + elegido + '</li>';
}

// Hacer las funciones accesibles desde el HTML (onclick)
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;

// Mostrar estado inicial
renderLista();
