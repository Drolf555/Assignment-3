alert("JS is connected!"); // If you don't see this, the file name is wrong.

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            themeBtn.textContent = isDark ? "Day Match" : "Night Match";
        });
    }
});
