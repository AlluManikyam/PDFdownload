var fs = require("fs");
var PDFDocument = require("pdfkit");

var pdf = new PDFDocument({
  size: "LEGAL", // See other page sizes here: https://github.com/devongovett/pdfkit/blob/d95b826475dd325fb29ef007a9c1bf7a527e9808/lib/page.coffee#L69
  info: {
    Title: "Holidays List",
    Author: "Manikyam",
  },
});

// draw some text
pdf.fontSize(25).text('Holidays List',{
  align: 'center',
  fontSize:40
})

// Write stuff into PDF
// pdf.text("Hello World");

// Stream contents to a file
pdf.pipe(fs.createWriteStream("holidays.pdf")).on("finish", () => {
  console.log("PDF closed");
});

// Close PDF and write file.
pdf.end();
