document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-bar input').value;
    alert(`Searching for: ${searchQuery}`);
});

// Login Modal
const loginModal = document.getElementById("login-modal");
const loginLink = document.getElementById("login-link");
const loginCloseButton = document.querySelector("#login-modal .close-button");

loginLink.addEventListener("click", function() {
    loginModal.style.display = "block";
});

loginCloseButton.addEventListener("click", function() {
    loginModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic authentication check (replace with your own logic)
    if (username === "user" && password === "password") {
        alert("Login successful!");
        loginModal.style.display = "none";
    } else {
        alert("Invalid username or password");
    }
});

// Product Details Modal
const productDetailsModal = document.getElementById("product-details-modal");
const productDetailsCloseButton = document.querySelector("#product-details-modal .close-button");

document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        showProductDetails(productId);
    });
});

productDetailsCloseButton.addEventListener("click", function() {
    productDetailsModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == productDetailsModal) {
        productDetailsModal.style.display = "none";
    }
});

function showProductDetails(productId) {
    // Fetch product details based on productId (use actual data source in real implementation)
    const productDetails = {
        1: { name: 'Product 1', description: 'Description of product 1', price: '$19.99', image: 'product1.jpg' },
        2: { name: 'Product 2', description: 'Description of product 2', price: '$29.99', image: 'product2.jpg' },
        3: { name: 'Product 3', description: 'Description of product 3', price: '$39.99', image: 'product3.jpg' }
    };
    
    const product = productDetails[productId];
    document.getElementById('product-details').innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
    `;
    productDetailsModal.style.display = "block";
}

// Wishlist
const wishlist = [];

document.querySelectorAll('.wishlist-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents triggering the product click event
        const productId = this.parentElement.getAttribute('data-id');
        addToWishlist(productId);
    });
});

function addToWishlist(productId) {
    // Fetch product details based on productId (use actual data source in real implementation)
    const productDetails = {
        1: { name: 'Product 1', description: 'Description of product 1', price: '$19.99', image: 'product1.jpg' },
        2: { name: 'Product 2', description: 'Description of product 2', price: '$29.99', image: 'product2.jpg' },
        3: { name: 'Product 3', description: 'Description of product 3', price: '$39.99', image: 'product3.jpg' }
    };
    
    const product = productDetails[productId];
    if (!wishlist.some(item => item.id === productId)) {
        wishlist.push({ id: productId, ...product });
        alert(`${product.name} added to wishlist`);
        updateWishlist();
    } else {
        alert(`${product.name} is already in wishlist`);
    }
}

function updateWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    wishlistItemsContainer.innerHTML = '';
    wishlist.forEach(item => {
        wishlistItemsContainer.innerHTML += `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
    });
}

// Wishlist Page Toggle
document.getElementById('wishlist-page-button').addEventListener('click', function() {
    document.getElementById('wishlist-page').style.display = 'block';
});
