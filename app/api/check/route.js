import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { place1, place2 } = await req.json();

    if (!place1 || !place2) {
      return NextResponse.json(
        { error: "Missing 'place1' or 'place2' in the request body." },
        { status: 400 }
      );
    }

    const query = `place1: ${place1} and place2: ${place2}`;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API Key." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction:
        "Check if both the given addresses are the same. Respond with only JSON in the format: { similarity: true/false, confidenceLevel: 'xx%' }.",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 256,
      responseMimeType: "application/json",
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(query);

    const responseText = result.response.text();
    let parsedResponse;

    try {
      parsedResponse = JSON.parse(responseText);
    } catch (error) {
      console.error("Failed to parse AI response:", responseText);
      throw new Error("Invalid response format from AI.");
    }

    if (
      parsedResponse &&
      typeof parsedResponse.similarity === "boolean" &&
      typeof parsedResponse.confidenceLevel === "string"
    ) {
      return NextResponse.json(parsedResponse);
    } else {
      throw new Error("Unexpected response structure from AI.");
    }
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
