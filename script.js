// Initialize cart from local storage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = cart.length;
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `<div class="cart-item">
            <span>${item.name}</span> - $${item.price}
        </div>`;
    }).join('');

    totalElement.innerText = total;
}

// Update count on load
updateCartCount();
