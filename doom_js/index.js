const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
const contadorCarrito = document.getElementById('contador-carrito');
const modalCarrito = document.getElementById('modal-carrito');
const botonCerrarCarrito = document.getElementById('cerrar-carrito');
const listaItemsCarrito = document.getElementById('items-carrito');
const botonComprar = document.getElementById('comprar');
const botonVerCarrito = document.getElementById('ver-carrito');

let carrito = [];

function actualizarContador() {
  // Actualizamos el contador de artículos en el carrito
  contadorCarrito.textContent = carrito.length + ' artículos en el carrito';
}

function agregarProductoAlCarrito(producto) {
  carrito.push(producto);
  actualizarContador();
}

function eliminarProductoDelCarrito(index) {
  // Creo un nuevo arreglo para el que queremos eliminar
  carrito = carrito.filter((producto, i) => i !== index);
  actualizarContador(); // Actualizo el contador
  mostrarCarrito(); // Mostramos el carrito actualizado
}

function mostrarCarrito() {
  // Limpiar el carrito 
  listaItemsCarrito.querySelectorAll('li').forEach(li => li.remove());

  carrito.forEach((producto, i) => {
    const li = document.createElement('li');
    li.textContent = producto.nombre;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => eliminarProductoDelCarrito(i));

    li.appendChild(botonEliminar);
    listaItemsCarrito.appendChild(li);
  });

  modalCarrito.style.display = 'flex';  // Muestra el modal con el carrito
}

function cerrarCarrito() {
  modalCarrito.style.display = 'none';  // Cierra el modal del carrito
}

function comprar() {
  alert('Compra realizada');
  carrito = [];  // Vacía el carrito
  actualizarContador();  // Actualiza el contador de artículos
  modalCarrito.style.display = 'none';  // Cierra el modal del carrito
}

// Asignar los eventos de agregar al carrito con addEventListener
botonesAgregarCarrito.forEach(boton => {
  boton.addEventListener('click', () => {
    const productoElemento = boton.parentNode; // Aquí obtenemos el padre, que es el artículo
    const nombreProducto = productoElemento.querySelector('h2').textContent;

    agregarProductoAlCarrito({ nombre: nombreProducto });
  });
});

// El evento de ver carrito
botonVerCarrito.addEventListener('click', mostrarCarrito);

// Evento de cerrar carrito
botonCerrarCarrito.addEventListener('click', cerrarCarrito);

// Evento de comprar
botonComprar.addEventListener('click', comprar);

// Fondo de pantalla
document.body.style.backgroundImage = 'url("img/fondo.jpg")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundAttachment = 'fixed';
