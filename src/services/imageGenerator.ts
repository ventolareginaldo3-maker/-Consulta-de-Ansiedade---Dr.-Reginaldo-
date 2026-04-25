import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generatePaymentImages() {
  const prompts = [
    "Professional and cozy psychology clinic office interior, soft lighting, comfortable chairs, plants, warm atmosphere, high quality photography.",
    "Symbolic representation of emotional balance and lightness, smooth stones balanced on top of each other, soft natural background, zen aesthetic.",
    "Close up of a warm cup of herbal tea on a wooden table next to a notebook, soft morning light, peaceful and inviting atmosphere.",
    "Abstract representation of mental clarity and peace, soft flowing silk in light colors, ethereal lighting, minimalist design.",
    "A beautiful, serene landscape of a calm lake at sunrise, soft colors, reflecting peace and tranquility, high resolution."
  ];

  const results = [];

  for (let i = 0; i < prompts.length; i++) {
    console.log(`Generating image ${i + 1}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompts[i] }] },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        results.push(`data:image/png;base64,${part.inlineData.data}`);
      }
    }
  }
  
  return results;
}
