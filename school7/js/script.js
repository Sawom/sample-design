document.addEventListener('DOMContentLoaded', function () {
    // 1. Current Date & Time Display
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

    // 2. Confirmation Popup Window for Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            
            if (username.trim() === '') {
                alert('Please enter your username.');
                return;
            }

            const isConfirmed = confirm(`Are you sure you want to log in as "${username}"?`);
            if (isConfirmed) {
                alert('Login Successful! Redirecting to student dashboard...');
                loginForm.reset();
            }
        });
    }

    // 3. Result Search Handler
    const resultForm = document.getElementById('resultForm');
    if (resultForm) {
        resultForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const studentId = document.getElementById('studentId').value;
            const dept = document.getElementById('departmentSelect').value;
            const output = document.getElementById('resultOutput');
            
            if (output) {
                output.classList.remove('d-none');
                output.innerHTML = `
                    <div class="alert alert-success mt-3">
                        <h5>Result Found for ID: ${studentId}</h5>
                        <p class="mb-1"><strong>Department:</strong> ${dept}</p>
                        <p class="mb-1"><strong>GPA:</strong> 5.00 / 5.00</p>
                        <p class="mb-0"><strong>Status:</strong> Passed with Distinction</p>
                    </div>
                `;
            }
        });
    }
});