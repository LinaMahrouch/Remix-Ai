import type { ActionFunctionArgs } from '@vercel/remix';
import {
  OpenAIStream,
  StreamingTextResponse,
  experimental_StreamData,
} from 'ai';
import OpenAI from 'openai';
import type { CompletionCreateParams } from 'openai/resources/chat/completions';
// Initialize OpenAI client with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge when deployed to vercel
export const config = { runtime: 'edge' };

// Functions to be used with OpenAI completions
const aifunctions: CompletionCreateParams.Function[] = [
  {
    name: 'get_current_weather',
    description: 'Retrieve the current weather information..',
    parameters: {
      type: 'object',
      properties: {
        format: {
          type: 'string',
          enum: ['celsius', 'fahrenheit'],
          description: 'Preferred unit for temperature.',
        },
      },
      required: ['format'],
    },
  },
  {
    name: 'run_javascript',
    description: 'Run JavaScript code in the browser context using eval().',
    parameters: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: `The JavaScript code to be evaluated. Avoid backticks and newlines. Responses should be valid JSON.`,
        },
      },
      required: ['code'],
    },
  },
];

export async function action({ request }: ActionFunctionArgs) {
  const { messages } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
    functions : aifunctions,
  });

  const streamData = new experimental_StreamData();
  const aiStream = OpenAIStream(response, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages,
    ) => {
      if (name === 'get_current_weather') {
        // Call a weather API here
        const weatherData = {
          temperature: 20,
          unit: args.format === 'celsius' ? 'C' : 'F',
        };

        streamData.append({
          text: 'Some custom data',
        });

        const newMessages = createFunctionCallMessages(weatherData);
        return openai.chat.completions.create({
          messages: [...messages, ...newMessages],
          stream: true,
          model: 'gpt-3.5-turbo-0613',
        });
      }
    },
    onCompletion(completion) {
      console.log('completion', completion);
    },
    onFinal(completion) {
      streamData.close();
    },
    experimental_streamData: true,
  });

  streamData.append({
    text: 'Hello, how are you?',
  });

  return new StreamingTextResponse(aiStream, {}, streamData);
}