let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} has been added to your cart.`);
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });

    totalPrice.innerHTML = `Total Price: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout...');
    // Additional checkout logic can be implemented here
}

// Call displayCart() on the cart.html page to show items
if (document.title === "Cart - E-Commerce Website") {
    displayCart();
}
