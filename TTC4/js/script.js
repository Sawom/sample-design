document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Date & Time Counter
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

  // 2. Contact Form Validations & Confirmation Modal
  const contactForm = document.getElementById('ttcContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('contactEmail');
      const mobileInput = document.getElementById('contactMobile');

      const emailVal = emailInput.value.trim();
      const mobileVal = mobileInput.value.trim();

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }

      // Mobile validation: Digits only & exactly 11 digits
      const mobileRegex = /^[0-9]{11}$/;
      if (!mobileRegex.test(mobileVal)) {
        alert('Please enter a valid 11-digit mobile number (numbers only).');
        mobileInput.focus();
        return;
      }

      // Show Bootstrap confirmation modal
      const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      modal.show();
      contactForm.reset();
    });
  }

  // 3. Collapsible FAQ Logic
  const faqButtons = document.querySelectorAll('.faq-btn');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = content.classList.contains('show');

      // Close all active drawers
      document.querySelectorAll('.faq-content').forEach(item => item.classList.remove('show'));
      document.querySelectorAll('.faq-btn span').forEach(icon => icon.textContent = '+');

      if (!isOpen) {
        content.classList.add('show');
        button.querySelector('span').textContent = '-';
      }
    });
  });
});