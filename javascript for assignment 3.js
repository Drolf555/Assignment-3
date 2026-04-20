document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // 1. Toggle the class on the body
            const isDark = document.body.classList.toggle('dark-mode');
            
            // 2. Update text content dynamically
            if (isDark) {
                themeBtn.textContent = "Day Match";
            } else {
                themeBtn.textContent = "Night Match";
            }
        });
    }
});
