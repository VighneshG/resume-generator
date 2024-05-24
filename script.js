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

  document.getElementById("downloadBtn").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adjust the margins and scale the content to fit within the PDF
    const content = document.querySelector(".cv-container");
    doc.html(content, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      x: 10,
      y: 10,
      html2canvas: { scale: 0.25 },
    });
  });
});
