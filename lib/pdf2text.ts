import "@ungap/with-resolvers";
import { getDocument } from "pdfjs-dist/webpack.mjs";

export async function extractTextFromPDF(file: File) {
    try {
        const pdf = await getDocument(URL.createObjectURL(file)).promise;

        let textContent = "";

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            const page = await pdf.getPage(pageNumber);
            const text = await page.getTextContent();

            textContent +=
                text.items
                    .map((item) => {
                        if ("str" in item) {
                            return item.str;
                        }
                    })
                    .join(" ") + "\n";
        }

        return `
  You are an experienced HR professional.
  
  I will give you a CV as raw text.
  
  If the file is NOT a CV, reply with exactly one sentence: "This file must be a CV." — no other text.
  
  If it IS a CV, analyze it and respond using the exact following structure in English. Your answer should only include plain lines with no symbols (no stars, bullets, dashes, or numbers). Each point should be in a new line so I can format it myself in my website.
  
  Structure:
  Overall Rating (out of 10): (number here)
  
  Strengths:
  [Write each strength in a new line]
  
  Weaknesses Areas for Improvement:
  [Write each weakness in a new line]
  
  Suggestions for Improvement:
  [Write each suggestion in a new line]
  
  Do not include any introductions or conclusions. Keep the format consistent every time.
  
  Now analyze this CV:
  ${textContent}
  
      `;
    } catch (error) {
        console.error("Error extracting text from PDF:", error);
        return null;
    }
}