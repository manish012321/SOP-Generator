import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateSOP = async (rawText) => {
    const prompt = `You are an SOP structuring expert.
Given the following raw process description, extract and return 
a JSON object with this exact structure:
{
  "title": "string",
  "steps": [
    {
      "step": 1,
      "description": "string",
      "role": "string",
      "warning": "string or null"
    }
  ]
}
Raw text: ${rawText}
Return ONLY the JSON. No explanation. No markdown. No backticks.`;

    try {
        const result = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.2,
        });
        const text = result.choices[0].message.content;
        const cleaned = text.replace(/```json|```/g, "").trim();
        return JSON.parse(cleaned);
    } catch (error) {
        throw new Error("AI generation failed: " + error.message);
    }
}