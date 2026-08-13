document.addEventListener('DOMContentLoaded', function () {
    // 1. Current Date & Time Display
    function updateDateTime() {
        const dateTimeElement = document.getElementById('currentDateTime');
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

    // 2. Confirmation Popup Window for Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            
            if (name.trim() === '' || email.trim() === '') {
                alert('Please fill out all required fields.');
                return;
            }

            const isConfirmed = confirm(`Thank you ${name}!\n\nAre you sure you want to send this message regarding "${subject}"?`);
            if (isConfirmed) {
                alert('Your message has been successfully sent! Our team will contact you within 24 hours.');
                contactForm.reset();
            }
        });
    }

    // 3. Dynamic Service Detail Switcher (Services Page)
    const serviceButtons = document.querySelectorAll('.service-tab-btn');
    const serviceDetailCard = document.getElementById('serviceDetailContent');
    
    if (serviceButtons.length > 0 && serviceDetailCard) {
        const serviceDetails = {
            'custom-web': {
                title: 'Custom Web Application Development',
                desc: 'We build enterprise-grade, scalable, and high-performance web applications tailored specifically to your core business operations using modern stacks like React, Next.js, Node.js, and PostgreSQL.',
                features: ['Microservices & Serverless Architectures', 'High-traffic API Optimization', 'Cloud Infrastructure & DevOps Integration']
            },
            'mobile-app': {
                title: 'Cross-Platform & Native Mobile Apps',
                desc: 'Deliver seamless user experiences across iOS and Android devices using React Native, Flutter, or Swift/Kotlin native platforms with offline capability and real-time syncing.',
                features: ['Native Performance', 'Biometric Security & Payments Integration', 'Push Notification Engines']
            },
            'ui-ux': {
                title: 'UI/UX Design & Product Prototyping',
                desc: 'Transform complex user workflows into intuitive, beautiful digital interfaces. We handle complete product discovery, design systems, interactive wireframes, and user testing.',
                features: ['User Journey Mapping', 'Figma Design Systems & Styleguides', 'Usability Audits & Redesigns']
            },
            'cloud-devops': {
                title: 'Cloud Infrastructure & DevOps Automation',
                desc: 'Streamline your continuous deployment pipeline with AWS, Azure, and Google Cloud Platform while reducing server costs and guaranteeing 99.99% uptime.',
                features: ['CI/CD Pipeline Construction', 'Kubernetes & Docker Orchestration', 'Automated Backup & Disaster Recovery']
            }
        };

        serviceButtons.forEach(button => {
            button.addEventListener('click', function () {
                const key = this.getAttribute('data-service');
                const data = serviceDetails[key];
                
                if (data) {
                    serviceButtons.forEach(btn => btn.classList.remove('active', 'btn-primary'));
                    serviceButtons.forEach(btn => btn.classList.add('btn-outline-primary'));
                    this.classList.remove('btn-outline-primary');
                    this.classList.add('active', 'btn-primary');

                    let featuresHtml = data.features.map(f => `<li class="mb-2"><i class="fa-solid fa-check-circle text-success me-2"></i>${f}</li>`).join('');

                    serviceDetailCard.innerHTML = `
                        <h3 class="text-primary fw-bold mb-3">${data.title}</h3>
                        <p class="lead text-muted">${data.desc}</p>
                        <hr class="my-4">
                        <h5 class="fw-bold mb-3">Key Capabilities:</h5>
                        <ul class="list-unstyled">
                            ${featuresHtml}
                        </ul>
                        <a href="contact.html" class="btn btn-primary mt-3 px-4 py-2">Request Proposal</a>
                    `;
                }
            });
        });
    }
});