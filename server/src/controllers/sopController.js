import SOP from "../models/sop.schema.js";
import { generateSOP } from "../services/aiService.js";



export const sopControl = async (req, res) => {
    try {
        const { rawText } = req.body;
        const sopData = await generateSOP(rawText);
        const sop = await SOP.create({
            workspaceId: req.user.workspaceId,
            title: sopData.title,

            rawTranscript: rawText,
            structuredSteps: sopData.steps,
            inputType: "text",
            status: "complete",
            createdBy: req.user.id
        })
        return res.status(201).json({ sop });

    } catch (error) {
       console.error(error);
    return res.status(500).json({ message: error.message })
    }
}