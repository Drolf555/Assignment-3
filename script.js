document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            themeBtn.textContent = isDark ? "Day Match" : "Night Match";
            console.log("Dark mode is now:", isDark);
        });
    }
});
 // Hamburger menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active"); // show/hide menu
        });
    }
});
