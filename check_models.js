require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // We just want to list models, but the SDK doesn't have a direct listModels method exposed easily on the main entry 
        // without using the model manager or similar, but let's try a different approach.
        // Actually, for the JS SDK, we might not have a direct listModels helper in the high level entry.
        // Let's try a simple fetch to the REST API to be sure, or just try another common model name.

        // Wait, the error message suggested Call ListModels.
        // In the Node SDK, it's not always straightforward.

        // Let's try 'gemini-1.5-flash' again but print the error carefully.
        // Actually, let's try 'gemini-1.0-pro'.

        console.log("Testing gemini-1.5-flash...");
        const model1 = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        await model1.generateContent("Test");
        console.log("Success with gemini-1.5-flash");

    } catch (error) {
        console.log("Error with gemini-1.5-flash:", error.message);
    }

    try {
        console.log("Testing gemini-1.0-pro...");
        const model2 = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
        await model2.generateContent("Test");
        console.log("Success with gemini-1.0-pro");
    } catch (error) {
        console.log("Error with gemini-1.0-pro:", error.message);
    }
}

listModels();
