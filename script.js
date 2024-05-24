document.addEventListener("DOMContentLoaded", () => {
  const headingFontSelect = document.getElementById("headingFont");
  const contentFontSelect = document.getElementById("contentFont");

  headingFontSelect.addEventListener("change", () => {
    const selectedFont = headingFontSelect.value;
    document.querySelectorAll("h1, h2, h3").forEach((element) => {
      element.style.fontFamily = selectedFont;
    });
  });

  contentFontSelect.addEventListener("change", () => {
    const selectedFont = contentFontSelect.value;
    document
      .querySelectorAll("p, span, .date, .demo-link")
      .forEach((element) => {
        element.style.fontFamily = selectedFont;
      });
  });

  document.getElementById('downloadBtn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Define the dimensions of the A4 page
    const pageWidth = 210;
    const pageHeight = 297;

    // Adjust the margins and scale the content to fit within the PDF
    const content = document.querySelector('.cv-container');
    doc.html(content, {
        callback: function (doc) {
            doc.save('resume.pdf');
        },
        x: 0, // Position at top-left corner
        y: 0,
        width: pageWidth, // Set width to A4 width
        height: pageHeight // Set height to A4 height
    });
});

  // document.getElementById('downloadBtn').addEventListener('click', () => {
  //     const { jsPDF } = window.jspdf;
  //     const doc = new jsPDF();

  //     // Define the dimensions of the A4 page
  //     const pageWidth = 210;
  //     const pageHeight = 297;

  //     // Adjust the margins and scale the content to fit within the PDF
  //     const content = document.querySelector('.cv-container');
  //     doc.html(content, {
  //         callback: function (doc) {
  //             doc.save('resume.pdf');
  //         },
  //         x: 0,
  //         y: 0,
  //         html2canvas: {
  //             scale: 1, // Set the scale to 1 to capture full resolution
  //             width: pageWidth, // Set width to A4 width
  //             height: pageHeight // Set height to A4 height
  //         },
  //         margin: { top: 20, right: 20, bottom: 20, left: 20 }, // Adjust margins as needed
  //     });
  // });
});
