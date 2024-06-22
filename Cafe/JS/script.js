// Función para agregar un producto al carrito
function addToCart(productName, price) {
    // Obtener el carrito de compras
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar si el producto ya está en el carrito
    var existingProduct = cart.find(function(product) {
        return product.name === productName;
    });

    if (existingProduct) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si el producto no está en el carrito, agregarlo
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
}
