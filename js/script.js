// ===== rkoide.dev Main JavaScript =====

// ----- Copyright Year -----
function updateCopyrightYear() {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const yearText = startYear === currentYear ?  startYear : `${startYear}-${currentYear}`;
    const copyrightElement = document.getElementById('copyright-year');
    if (copyrightElement) { // Update only if "copyrightElement" exists
        copyrightElement.textContent = yearText;
    }
}

// ----- Dark Mode Toggle -----
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle-icon');
    
    function getSavedTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // if (themeIcon) {
        //     themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        // }
    }
    
    applyTheme(getSavedTheme());
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' :  'dark';
            applyTheme(newTheme);
        });
    }
    
    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', function(e) {
        if (! localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' :  'light');
        }
    });
}

// ----- Initialize -----
document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
    initDarkMode();
});