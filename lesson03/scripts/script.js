document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the copyright text
    const currentYear = new Date().getFullYear();
    document.getElementById('copyrightYear').textContent = currentYear;

    // Get the date of the last modification of the document
    const lastModifiedTimestamp = document.lastModified;
    document.getElementById('lastModified').textContent = lastModifiedTimestamp;
});