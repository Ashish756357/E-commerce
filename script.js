function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
document.getElementById("currentYear").textContent = new Date().getFullYear();



// Global cart array to store products
const cart = [];

/**
 * Updates the Cart section by rendering the current cart items.
 */
function updateCartDisplay() {
  const cartItemsContainer = document.querySelector('.cart-items');
  // Clear existing cart items
  cartItemsContainer.innerHTML = '';

  // If cart is empty, display a message
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>No items in cart.</p>';
    return;
  }

  // Loop through each item and create an HTML element for it
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-item');
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>${item.description || 'No description available.'}</p>
      </div>
      <span class="cart-item-price">₹${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(li);
  });
}

/**
 * Adds a product to the cart.
 * If the product is already in the cart, you can choose to update the quantity.
 */
function addToCart(product) {
  // For simplicity, this example doesn't update quantity.
  // You can extend this logic as needed.
  cart.push(product);
  updateCartDisplay();
}

/**
 * Removes a product from the cart based on its index.
 */
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

/**
 * Smooth scrolling function for navigation.
 */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Attach event listeners once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set the current year in the footer dynamically
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Attach click event to all "Add to Cart" buttons in product cards
  const buttons = document.querySelectorAll('.product-card button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Get product details from its card
      const productCard = button.parentElement;
      const name = productCard.querySelector('h3').textContent;
      let priceText = productCard.querySelector('p').textContent;
      // Remove any non-numeric characters (like commas, currency symbols, etc.)
      priceText = priceText.replace(/[^0-9.]/g, '');
      const price = parseFloat(priceText);
      const image = productCard.querySelector('img').src;
      // Optionally, get a product description if available
      const description = productCard.querySelector('.description') 
                            ? productCard.querySelector('.description').textContent 
                            : '';

      // Create a product object
      const product = { name, price, image, description };
      addToCart(product);
    });
  });
});

function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>No items in cart.</p>';
    } else {
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
          <img src="${item.image}" alt="${item.name}" style="width:50px; height:auto;">
          <div class="cart-item-details">
            <h3>${item.name}</h3>
            <p>${item.description || 'No description available.'}</p>
          </div>
          <span class="cart-item-price">₹${item.price}</span>
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
      });
    }
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  