```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@

+ CODE BEFORE ASYNC
```

        const productListElement = document.getElementById('productList');

        // Fetch and display products function
        const fetchAndDisplayProducts = () => {
            productListElement.innerHTML = '';

            fetch('https://my-json-server.typicode.com/fonovac/api2/products')
                .then(response => response.json())
                .then(data => {
                    data.forEach(product => {
                        const productElement = document.createElement('div');
                        productElement.classList.add('product');

                        const imageURL = `images/prod${product.id}.png`;
                        const starRatingClass = product.rating === '★★★★★' ? 'blue' : '';

                        productElement.innerHTML = `
                            <h2>${product.id}</h2>
                            <img src="${imageURL}" alt="${product.name}">
                            <p class="star-rating ${starRatingClass}">${product.rating}</p>
                            <p>Title: ${product.title}</p>
                            <p>Price: ${product.price}</p>
                            <p>Quantity: ${product.quantity}</p>
                        `;
                        productListElement.appendChild(productElement);
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };

        // Initial fetch and display of products
        fetchAndDisplayProducts();
