/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gemini } from "@/gemini";


export async function generateFeedback(path: string, message: string) {
    try {
        const response = await Gemini.models.generateContent({
            model: "gemini-2.0-flash",
            contents: message,

        });

        return response

    } catch (err) {
        console.error(err);
        return

    }
}