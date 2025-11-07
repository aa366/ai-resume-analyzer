# 📄 AI CV Analyzer

Web app that analyzes CVs using **Google Gemini AI**.  
Built with "Vite", "Typescript"

---

## ⚙️ Config

- Get an API key from [Google AI Studio](https://ai.google.dev/).
- Add it in the code:

```ts
const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });
```

---

## ✨ Features

- Upload PDF CV and extract text with `pdfjs-dist`.
- Analyze using **Google Gemini AI**.
- Authentication + Protected Routes.
- Responsive design with Chakra UI.
- Strapi backend for content management.
