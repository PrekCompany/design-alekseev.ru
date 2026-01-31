import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Always use process.env.API_KEY directly as per strict guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCreativeBrief = async (userIdea: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a world-class Creative Director at a digital design agency called 'Digital Alchemy'. 
      A potential client has a rough idea: "${userIdea}".
      
      Generate a short, exciting, high-level project concept in RUSSIAN (Русский язык).
      Structure it as:
      1. Concept Name (creative title)
      2. Aesthetic/Vibe (3-5 words)
      3. Strategic Insight (1 sentence)
      
      Keep it professional yet visionary. Do not use Markdown formatting symbols like bolding excessively, just plain text with clear line breaks.`,
    });

    return response.text || "Could not generate brief.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Сервис временно недоступен. Пожалуйста, заполните форму вручную.";
  }
};