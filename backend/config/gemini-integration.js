import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';
import prompt from "../prompt/prompt.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function AI_recommendation(education, skill, location) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  // Gemini API call
  const geminiCall = model.generateContent(prompt(education, skill, location));

  // Timeout
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Recommendation timeout")), 150000)
  );

  try {
    const result = await Promise.race([geminiCall, timeout]);
    const recommendation = result.response.text();
    return recommendation
  } catch (error) {
    return error.message;
  }
}

export default AI_recommendation;
