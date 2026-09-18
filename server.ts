import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// AI generator endpoint for new Flawed Model Answers
app.post("/api/generate-flawed-answer", async (req: Request, res: Response) => {
  try {
    const { topic, examBoard, targetLevel, specificMisconception } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(200).json({
        fallback: true,
        message: "Gemini API key not set in environment. Using pre-loaded curriculum database.",
      });
    }

    const prompt = `You are a Senior Chief Examiner for AQA AS Level Biology (Specification 7401 - Units 3.1 to 3.4).
Create an authentic exam question and a flawed model answer for the topic: "${topic || 'Enzyme kinetics and competitive/non-competitive inhibitors'}".
Target AQA Specification Unit: Must be one of 3.1 (Biological Molecules), 3.2 (Cells), 3.3 (Organisms Exchange Substances), or 3.4 (Genetic Information and Variation).
Level: ${targetLevel || 'AQA AS Level Paper 1 / Paper 2 (AO2/AO3 focus)'}.
Target Misconception: ${specificMisconception || 'Common student misconceptions and missing precise AQA examiner criteria'}.

Return a JSON object strictly matching this schema:
{
  "title": "Short descriptive title",
  "topic": "${topic || 'AQA Biology'}",
  "examBoard": "AQA",
  "specCode": "e.g. 3.1.4.2 or 3.2.3 or 3.3.4",
  "aqaUnit": "3.1",
  "totalMarks": 4,
  "aoLevel": "AO2 (Application) and AO3 (Analysis)",
  "questionText": "The exact exam question with clear context/scenario.",
  "flawedAnswer": "A realistic, 3-4 sentence student response that SOUNDS plausible to a novice but commits 2-3 key exam sins (e.g. saying enzyme was killed, missing tertiary structure, vague statements, inverted gradients).",
  "officialMarkScheme": [
    {
      "markCode": "M1",
      "criteria": "Scientific explanation required for mark 1",
      "indicativePhrases": ["exact key term", "alternative acceptable phrase"],
      "rejectOrErrors": "Reject: 'vague phrase'"
    },
    {
      "markCode": "M2",
      "criteria": "Scientific explanation required for mark 2",
      "indicativePhrases": ["precise phrase 2"],
      "rejectOrErrors": "Do not credit: 'misconception'"
    },
    {
      "markCode": "M3",
      "criteria": "Scientific explanation required for mark 3",
      "indicativePhrases": ["precise phrase 3"],
      "rejectOrErrors": ""
    },
    {
      "markCode": "M4",
      "criteria": "Scientific explanation required for mark 4",
      "indicativePhrases": ["precise phrase 4"],
      "rejectOrErrors": ""
    }
  ],
  "flawedAnnotations": [
    {
      "phrase": "phrase from flawedAnswer",
      "issueType": "misconception",
      "explanation": "Why this loses marks in an AQA examiner's eye",
      "markLost": 1,
      "suggestedCorrection": "Accurate specification phrasing"
    }
  ],
  "examinerVerdict": {
    "marksAwarded": 1,
    "maxMarks": 4,
    "summary": "Concise examiner commentary on why this answer scored poorly despite good intention."
  },
  "exemplarRewrite": "Full 100% textbook model answer hitting every single mark scheme point with precise AQA keywords.",
  "keyTerms": ["list", "of", "4-6", "essential", "AQA", "keywords"],
  "teacherNotes": "Brief advice for the 5-7 minute live marking session, including recommended cold-call question.",
  "recommendedColdCall": "Cold-call question: 'Why does the examiner reject the phrase used in this student answer?'"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json({ success: true, data: parsed });
  } catch (error: any) {
    console.error("AI Generation error:", error);
    res.status(500).json({ error: error.message || "Failed to generate answer" });
  }
});

async function startServer() {
  // Mount Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MarkScheme Lab server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
