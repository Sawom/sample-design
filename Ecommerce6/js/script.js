document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Date & Time Display
  function updateClock() {
    const clockEl = document.getElementById('current-date-time');
    if (clockEl) {
      const now = new Date();
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      clockEl.textContent = now.toLocaleDateString('en-US', options);
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 2. Signup Form Submission & Confirmation Modal
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      document.getElementById('modalMessage').textContent = 'Account created successfully! Welcome to ShopMax.';
      modal.show();
      signupForm.reset();
    });
  }

  // 3. Login Form Submission & Confirmation Modal
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      document.getElementById('modalMessage').textContent = 'You have logged in successfully!';
      modal.show();
      loginForm.reset();
    });
  }

  // 4. Quantity Increment/Decrement for Product Detail & Cart
  const qtyInput = document.getElementById('productQty');
  const btnPlus = document.getElementById('btnQtyPlus');
  const btnMinus = document.getElementById('btnQtyMinus');

  if (qtyInput && btnPlus && btnMinus) {
    btnPlus.addEventListener('click', () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    });
    btnMinus.addEventListener('click', () => {
      if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
      }
    });
  }
});