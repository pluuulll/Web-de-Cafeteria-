// carrito.js

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    // Crea un nuevo elemento de lista para el producto
    var lista = document.getElementById("carrito");
    var nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = producto + " - $" + precio;
    
    // Botón para eliminar el producto
    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
        lista.removeChild(nuevoProducto);
    };
    
    // Botón para comprar el producto
    var botonComprar = document.createElement("button");
    botonComprar.textContent = "Comprar";
    botonComprar.onclick = function() {
        alert("¡Gracias por comprar " + producto + " por $" + precio + "!");
        lista.removeChild(nuevoProducto);
    };

    // Agregar botones al producto
    nuevoProducto.appendChild(botonEliminar);
    nuevoProducto.appendChild(botonComprar);

    lista.appendChild(nuevoProducto);
}

// Función para obtener los parámetros de la URL
function obtenerParametroUrl(nombre) {
    var parametros = new URLSearchParams(window.location.search);
    return parametros.get(nombre);
}

// Obtener los detalles del producto de la URL
var producto = obtenerParametroUrl("producto");
var precio = obtenerParametroUrl("precio");

// Si hay detalles del producto, agrégalo al carrito
if (producto && precio) {
    agregarAlCarrito(producto, precio);
}

// Función para comprar todos los productos
function comprarProductos() {
    var lista = document.getElementById("carrito");
    if (lista.children.length > 0) {
        alert("¡Gracias por tu compra!");
        // Eliminar todos los productos del carrito después de la compra
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    } else {
        alert("No hay productos en el carrito.");
    }
}
