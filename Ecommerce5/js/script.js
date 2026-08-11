document.addEventListener('DOMContentLoaded', () => {
  // Current Date & Time counter
  function updateDateTime() {
    const dateTimeElement = document.getElementById('current-date-time');
    if (dateTimeElement) {
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
      dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
    }
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Form submission confirmation popup
  const authForm = document.getElementById('authForm');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const confirmModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      confirmModal.show();
      authForm.reset();
    });
  }
});