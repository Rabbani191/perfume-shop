// Sample perfume products with actual image URLs
const products = [
    { id: 1, name: 'Chanel No. 5', brand: 'Chanel', price: '$150', image: 'https://www.shutterstock.com/image-photo/bottle-perfume-mens-eau-de-600w-2077688101.jpg' },
    { id: 2, name: 'Dior Sauvage', brand: 'Dior', price: '$120', image: 'https://img.freepik.com/premium-photo/men-perfume-isolated-white-background_1168123-1711.jpg' },
    { id: 3, name: 'Tom Ford Black Orchid', brand: 'Tom Ford', price: '$180', image: 'https://t4.ftcdn.net/jpg/11/39/44/99/360_F_1139449956_HnzKMBPWmyPIu1D0kmcHb4QJTSsuCsKh.jpg' },
    { id: 4, name: 'Yves Saint Laurent Libre', brand: 'Yves Saint Laurent', price: '$110', image: 'https://t4.ftcdn.net/jpg/08/55/25/19/360_F_855251980_n193RAls40KrXt9z5XZ7HUp1Gn8j1teg.jpg' },
    { id: 5, name: 'Armani Code', brand: 'Armani', price: '$130', image: 'https://i.pinimg.com/474x/a6/c2/39/a6c239192983f66c3931ae59efd273f6.jpg' },
];

// Function to display products
function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear current products

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.brand}</p>
            <div class="price">${product.price}</div>
        `;
        productList.appendChild(productDiv);
    });
}

// Search function to filter products
function searchPerfumes() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery) || 
        product.brand.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
}

// Initial display of all products
displayProducts(products);

