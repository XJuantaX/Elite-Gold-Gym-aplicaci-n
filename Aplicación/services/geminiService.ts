
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFitnessAdvice = async (profile: UserProfile) => {
  const prompt = `Como entrenador personal de Elite Gold Gym, da un mensaje de bienvenida motivador y una breve sugerencia de rutina de 3 pasos basada en estos datos: Nombre: ${profile.name}, Edad: ${profile.age}, Objetivo: ${profile.goal}, Plan: ${profile.tier}. Responde en español de forma elegante y premium.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "¡Bienvenido a la élite! Estamos procesando tu plan personalizado.";
  }
};

export const getRecommendedPlan = async (goals: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Basado en el objetivo "${goals}", ¿cuál de estos planes de gimnasio es mejor? BASIC (Acceso gym), PRO (Acceso + Clases), ELITE (Acceso + Clases + Spa + Entrenador Personal). Responde solo con una palabra del nombre del plan.`,
    config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                recommended: { type: Type.STRING }
            },
            required: ["recommended"]
        }
    }
  });

  try {
    const data = JSON.parse(response.text);
    return data.recommended;
  } catch {
    return "PRO";
  }
};
