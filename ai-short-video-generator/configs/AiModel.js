const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
   export  const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic : Interesting Historical story along with AI images prompt in realistic format for each scene and give me result in JSON format with image prompt and content text as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"image_prompt\": \"A realistic painting of a bustling medieval marketplace, vibrant colors, crowded with people in period clothing, a focus on a specific stall selling spices, sunlight streaming through the buildings\",\n    \"content_text\": \"The year is 1347.  The Black Death is on the horizon, but life in the bustling city of Florence carries on, seemingly unaware of the impending doom. Merchants hawk their wares, laughter echoes through the cobblestone streets...\"\n  },\n  {\n    \"image_prompt\": \"Realistic portrait of a worried-looking young woman in 14th-century clothing, holding a handkerchief to her mouth, visible cough, slightly pale complexion, dimly lit room\",\n    \"content_text\": \"...until the first cases appear.  A cough, a fever, strange purple blotches... Isabella, a young apprentice seamstress, finds herself among the first victims.\"\n  },\n  {\n    \"image_prompt\": \"A realistic depiction of a plague doctor, in full attire including a mask, tending to a sick person in a dimly lit, crowded room. Focus on the details of the doctor's attire and the suffering patient.\",\n    \"content_text\": \"Plague doctors, their terrifying beaks filled with herbs, attempt to stem the tide of death, but their efforts are futile. The disease spreads with terrifying speed.\"\n  },\n  {\n    \"image_prompt\": \"Realistic image of empty, deserted streets in a medieval city.  Buildings stand ominous and shadowed,  a few rats scurrying in the foreground.  Overall tone: desolate and eerie.\",\n    \"content_text\": \"Fear grips the city.  The streets, once vibrant, fall silent.  Families are torn apart, and death becomes a constant companion.\"\n  },\n  {\n    \"image_prompt\": \"Realistic painting of a mass grave, dimly lit, showing bodies hastily buried, a few crows circling overhead, a somber and emotionally impactful scene.\",\n    \"content_text\": \"Mass graves become a grim reality, a silent testament to the devastating power of the plague.\"\n  },\n  {\n    \"image_prompt\": \"Realistic portrait of a survivor, gaunt but alive, looking out at a now-empty landscape, sunlight breaking through the clouds, hopeful expression.\",\n    \"content_text\": \"But even in darkness, hope remains. Survivors, scarred but alive, begin to rebuild, forever changed by the catastrophe.\"\n  },\n    {\n    \"image_prompt\": \"Realistic image of a slowly rebuilding city, showing construction, people cautiously returning to the streets, a mix of sadness and tentative hope.\",\n    \"content_text\": \"The rebuilding process is long and arduous, but it is a testament to the resilience of the human spirit, a lesson learned in blood and tears.\"\n  }\n]\n```\n\n**Notes:**\n\n* This JSON provides prompts and text for a narrative structure. You would need to use a video editing software and an AI image generator (like Midjourney, Dall-E 2, Stable Diffusion) to create the actual video.\n* The image prompts are designed to be descriptive enough for a realistic style.  Experiment with different AI image generators to see what works best.\n*  A 30-second video requires concise storytelling.  This script might need adjustments based on the pace of your chosen video editing software and the speed at which the images are generated and processed. You might need to reduce the number of scenes or shorten the text for each scene to fit the timeframe.\n* Consider adding background music and sound effects to enhance the emotional impact of the video.\n\n\nRemember to adjust the timing of each scene to achieve a smooth 30-second video.  You'll likely need to experiment to get the desired pacing.\n"},
          ],
        },
      ],
    });
  
    