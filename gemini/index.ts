import { GoogleGenAI } from "@google/genai";

export const Gemini = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMENI_API_KEY })
