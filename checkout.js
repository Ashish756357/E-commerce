document.addEventListener('DOMContentLoaded', () => {
    // Retrieve cart items from localStorage (stored as a JSON string)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const summaryItemsContainer = document.querySelector('.summary-items');
    let totalAmount = 0;
    
    if (cart.length === 0) {
      summaryItemsContainer.innerHTML = '<li>No items in your cart.</li>';
    } else {
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price} (x${item.quantity})`;
        summaryItemsContainer.appendChild(li);
        totalAmount += item.price * item.quantity;
      });
    }
    
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    
    // Payment form handling
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simulate payment processing (replace with real integration as needed)
      alert('Payment successful! Thank you for your purchase.');
      // Clear cart from localStorage
      localStorage.removeItem('cart');
      // Redirect to home or order confirmation page
      window.location.href = 'index.html';
    });
  });
  