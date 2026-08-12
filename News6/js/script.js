document.addEventListener('DOMContentLoaded', function () {
    // 1. Live Date and Time Display
    function updateDateTime() {
        const dateTimeElement = document.getElementById('currentDateTime');
        if (dateTimeElement) {
            const now = new Date();
            const options = { 
                weekday: 'long', 
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

    // 2. Login Form Submission Confirmation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            
            if (username.trim() === '') {
                alert('Please enter a valid username.');
                return;
            }

            const isConfirmed = confirm(`Are you sure you want to log in as "${username}"?`);
            if (isConfirmed) {
                alert('Login Successful! Redirecting to dashboard...');
                loginForm.reset();
            }
        });
    }

    // 3. Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for contacting us! Your message has been sent successfully.');
            contactForm.reset();
        });
    }
});