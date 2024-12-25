import { chatSession } from "./GeminiAIModal";

export const askFelixBot = async (inputPrompt) => {
  try {
    // Send the input prompt to the chat session
    const result = await chatSession.sendMessage(inputPrompt);
    // Get and clean the response text
    const textResp = await result.response.text();
    return textResp;
  } catch (error) {
    console.error("Error in askFelixBot:", error);
    return null; // Return null or handle error as needed
  }
}
