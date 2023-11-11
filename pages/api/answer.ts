import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI, { ClientOptions } from "openai";
import OpenAIApi from "openai";
type ResponseData = {
  answer: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const openaiConf: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
};

const openai = new OpenAIApi(openaiConf);

//handler

export default async function handler(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;

  if (!prompt || prompt === "") {
    return new Response("prompt is required", { status: 400 });
  }
  const aiResult = await openai.completions.create({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.7,
    max_tokens: 2048,
    frequency_penalty: 0.5,
    presence_penalty: 0,

});
const response = aiResult.choices[0].text?.trim()  || 'an error occured!';
res.status(200).json({ answer: response });
}

