// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    alert(`${productName} has been added to your cart.`);
}

// Function to display cart contents
function displayCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let cartContents = "Your Cart:\n";
    let total = 0;

    cart.forEach(item => {
        cartContents += `${item.name} - $${item.price} x ${item.quantity}\n`;
        total += item.price * item.quantity;
    });

    cartContents += `Total: $${total.toFixed(2)}`;
    alert(cartContents);
}

// Attach addToCart function to buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.querySelector('h4').innerText;
        const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));

        addToCart(productName, productPrice);
    });
});

// Function to show cart contents on a button click
document.getElementById('view-cart').addEventListener('click', displayCart);
