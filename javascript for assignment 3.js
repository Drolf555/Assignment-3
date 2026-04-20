document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME SWITCHER ---
    const themeBtn = document.getElementById('theme-toggle');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Toggles the class on the <body>
            const isDark = document.body.classList.toggle('dark-mode');
            
            // Updates text based on the mode
            if (isDark) {
                themeBtn.textContent = "Day Match";
            } else {
                themeBtn.textContent = "Night Match";
            }
        });
    }

    // --- 2. FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const emailInput = document.getElementById('user-email');
            if (emailInput.value.trim() === "") {
                event.preventDefault(); // Stop form submission
                alert("Please enter an email address before sending.");
            }
        });
    }
});
