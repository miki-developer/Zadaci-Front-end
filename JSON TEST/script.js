
const productListElement = document.getElementById('productList');
const errorMessageElement = document.getElementById('errorMessage');

const fetchProducts = async () => {
    try {
        const response = await fetch('https://my-json-server.typicode.com/fonovac/api2/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        errorMessageElement.textContent = 'There was an error with loading the data.';
    }
};

const displayProducts = async () => {
    productListElement.innerHTML = '';
    errorMessageElement.textContent = ''; // Clear previous error message

    const products = await fetchProducts();
    
    if (!products) {
        errorMessageElement.textContent = 'There was an error with loading the data.';
        return;
    }
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imageURL = `images/prod${product.id}.png`;

        productElement.innerHTML = `
            <h2>${product.id}</h2>
            <img src="${imageURL}" alt="${product.name}">
            <p>Title: ${product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
        `;
        productListElement.appendChild(productElement);
    });
};

displayProducts();

