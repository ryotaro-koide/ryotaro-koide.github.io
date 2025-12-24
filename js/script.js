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

// ----- Initialize -----
document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
    //initDarkMode();
});