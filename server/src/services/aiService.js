import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const getPrompt = (rawText) => `
You are an expert business process consultant and SOP writer with 20 years of experience.

Transform the following raw process description into a highly detailed, professional Standard Operating Procedure.

RAW PROCESS:
${rawText}

REQUIREMENTS:
- Minimum 5 to 8 detailed steps
- Each step description must be 2 to 3 sentences explaining exactly what to do
- Assign realistic specific job roles to each step
- Add warnings for risks, compliance issues, or critical actions
- Use professional business language
- Steps must flow logically from start to finish

Return ONLY this exact JSON, no markdown, no backticks, no explanation:
{
  "title": "Professional specific SOP title",
  "overview": "2-3 sentence overview of what this SOP covers and why it matters",
  "steps": [
    {
      "step": 1,
      "title": "Short step title",
      "description": "Detailed 2-3 sentence description of exactly what to do",
      "role": "Specific job title responsible",
      "warning": "Critical warning or null",
      "duration": "Estimated time e.g. 5 minutes"
    }
  ]
}
`;

export const generateSOP = async (rawText) => {
    try {
        const result = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: getPrompt(rawText) }],
            temperature: 0.3,
        });
        const text = result.choices[0].message.content;
        const cleaned = text.replace(/```json|```/g, "").trim();
        return JSON.parse(cleaned);
    } catch (error) {
        throw new Error("AI generation failed: " + error.message);
    }
};