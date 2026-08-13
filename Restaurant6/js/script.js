document.addEventListener("DOMContentLoaded", function () {
  // 1. Current Date and Time Display
  function updateDateTime() {
    const dateTimeElement = document.getElementById("current-datetime");
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

  // 2. Reservation Form Modal Trigger
  const reservationForm = document.getElementById("reservation-form");
  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      document.getElementById("summary-name").textContent = document.getElementById("res-name").value;
      document.getElementById("summary-email").textContent = document.getElementById("res-email").value;
      document.getElementById("summary-phone").textContent = document.getElementById("res-phone").value;
      document.getElementById("summary-guests").textContent = document.getElementById("res-guests").value;
      document.getElementById("summary-date").textContent = document.getElementById("res-date").value;
      document.getElementById("summary-time").textContent = document.getElementById("res-time").value;

      const confirmModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      confirmModal.show();
    });
  }

  // 3. Item Detail Price Calculator
  const quantityInput = document.getElementById("item-quantity");
  const unitPriceElement = document.getElementById("unit-price");
  const totalPriceElement = document.getElementById("total-price");

  if (quantityInput && unitPriceElement && totalPriceElement) {
    const unitPrice = parseFloat(unitPriceElement.getAttribute("data-price"));
    quantityInput.addEventListener("input", function () {
      const qty = parseInt(quantityInput.value) || 1;
      const total = (unitPrice * qty).toFixed(2);
      totalPriceElement.textContent = total;
    });
  }
});