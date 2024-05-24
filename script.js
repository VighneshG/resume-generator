// Script to allow users to customize the content
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for dynamic content loading, customization logic, etc.
    // Example: document.getElementById('name').innerText = "Custom Name";
});
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('downloadBtn').addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Capture the content of the CV
        const content = document.querySelector('.cv-container').innerHTML;
        
        // Use jsPDF to generate the PDF
        doc.html(content, {
            callback: function (doc) {
                doc.save('cv.pdf');
            },
            x: 10,
            y: 10
        });
    });
});
