const products = [
    { id: 1, name: 'Chanel No. 5', brand: 'Chanel', price: 150, image: 'https://www.shutterstock.com/image-photo/bottle-perfume-mens-eau-de-600w-2077688101.jpg', stock: 4 },
    { id: 2, name: 'Dior Sauvage', brand: 'Dior', price: 120, image: 'https://img.freepik.com/premium-photo/men-perfume-isolated-white-background_1168123-1711.jpg', stock: 3 },
    { id: 3, name: 'Tom Ford Black Orchid', brand: 'Tom Ford', price: 180, image: 'https://t4.ftcdn.net/jpg/11/39/44/99/360_F_1139449956_HnzKMBPWmyPIu1D0kmcHb4QJTSsuCsKh.jpg', stock: 5 },
    { id: 4, name: 'Yves Saint Laurent Libre', brand: 'Yves Saint Laurent', price: 110, image: 'https://t4.ftcdn.net/jpg/08/55/25/19/360_F_855251980_n193RAls40KrXt9z5XZ7HUp1Gn8j1teg.jpg', stock: 2 },
    { id: 5, name: 'Armani Code', brand: 'Armani', price: 130, image: 'https://i.pinimg.com/474x/a6/c2/39/a6c239192983f66c3931ae59efd273f6.jpg', stock: 3 },
];

let productCart = [];
let productsToShow = 2;

function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.slice(0, productsToShow).forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.brand}</p>
            <p>Stock: ${product.stock}</p>
            <div class="price">$${product.price}</div>
            <div class="product-hover">
                <input type="number" class="quantity-input" id="quantity-${product.id}" min="1" max="${product.stock}" value="1">
                <button class="buy-button" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = productCart.find(item => item.id === productId);
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (cartItem) {
        if (cartItem.quantity + quantity <= product.stock) {
            cartItem.quantity += quantity;
        } else {
            alert('Not enough stock!');
        }
    } else {
        if (quantity <= product.stock) {
            productCart.push({ ...product, quantity });
        } else {
            alert('Not enough stock!');
        }
    }

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');

    cartList.innerHTML = '';
    let total = 0;

    productCart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} (${item.quantity}) - $${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });

    cartCount.textContent = productCart.length;
    totalPrice.textContent = `Total: $${total}`;
}

function removeFromCart(productId) {
    productCart = productCart.filter(item => item.id !== productId);
    updateCart();
}

document.getElementById('load-more').addEventListener('click', () => {
    if (productsToShow < products.length) {
        productsToShow += 2;
        loadProducts();
    } else {
        alert('No more products to load!');
    }
});

loadProducts();
