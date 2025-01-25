import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";
import { Request, Response } from "express";
import { StructuredOutputParser } from "langchain/output_parsers";
import { OpenAI } from "openai";
import { CLOSING } from "ws";
import { z } from "zod";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genSiteAi = async (req: Request, res: Response) => {
  try {
    const { orgName, orgType, description, email, phoneNumber } = req.body;
    console.log(req.body);
    const inputBodySchems = z.object({
      orgName: z.string().min(3).max(100),
      orgType: z.string().min(3).max(100),
      description: z.string().min(10).max(1000),
      email: z.string().email(),
      phoneNumber: z.string().min(10).max(15),
    });
    // const validationResult = inputBodySchems.parse(req.body);
    // console.log(validationResult);
    // if (!validationResult) {
    //   return res.status(400).json({
    //     error: "Validation failed",
    //     issues: inputBodySchems
    //       .safeParse(req.body)
    //       .error?.issues?.map(
    //         (item, index) => `${item.path[0]} - ${item.message}`
    //       ),
    //   });
    // }

    const ollama = new ChatOllama({
      model: "llama3.1:8b",
      baseUrl: "http://localhost:11434",
    });

    const airesponseSchema = z.object({
      htmlCode: z
        .string()
        .min(100)
        .max(100000)
        .describe("html code in string formate"),
    });
    const parser = StructuredOutputParser.fromZodSchema(airesponseSchema);
    const prompt = PromptTemplate.fromTemplate(`
Based on the description: “${description}”, generate a good looking One-Page Website (or Scrolling Page) in HTML format for a mini website and provide the code with the following information:
    Name of the company: ${orgName}
    Organization type: ${orgType}
    Email: ${email}
    Phone number: ${phoneNumber}

Design Guidelines
    Primary Colors:
        Base Gray: #808080 (medium gray)
        Accent Lime: #32CD32 (vibrant lime green)
    Color Distribution:
        Background: Light gray (#F0F0F0)
        Text: Charcoal gray (#333333)
        Navbar: Medium gray (#808080)
        Hover Elements: Bright lime (#32CD32)
EXAMPLE OUTPUT:
{{
“htmlCode”: “<title>Hello World</title><h1>Hello World!</h1>”
    }}

CRITICAL INSTRUCTIONS:

    The website must include ‘Contact Us’, ‘About Us’, and ‘Services’ sections.
    The website must be responsive.
    The website must be SEO-friendly.
    The response must be in HTML format.
    Respond ONLY with VALID JSON with only one field: “htmlCode”.
    Use the EXACT schema format provided.
    NO additional commentary.
      \n{format_instructions}
    `);

    const prompt1 = PromptTemplate.fromTemplate(`
      CRITICAL INSTRUCTIONS FOR CODE GENERATION:
      generate a code for One-Page Website in html format displaying hellow world:
      EXAMPLE OUTPUT:{{
        htmlCode:<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello World!</h1></body></html>
    }}
      CRITICAL: 
      - Respond ONLY with VALID JSON just like given in example 
      - NO additional commentary,text,lines,
      \n{format_instructions}
    `);

    const chain = prompt.pipe(ollama).pipe(parser);

    console.log(parser.getFormatInstructions());
    const llmResponse = await chain.invoke({
      format_instructions: parser.getFormatInstructions(),
    });

    console.log("llm res ===============>", llmResponse);

    return res.status(200).json({
      data: llmResponse.htmlCode,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return res.status(500).json({ error: errorMessage });
  }
};
const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-0924485f5084485c8b73eec74d19f569",
});
const genSiteAiGemini = async (req: Request, res: Response) => {
  try {

    const { orgName, orgType, description, email, phoneNumber } = req.body;
    console.log(req.body);
    const inputBodySchems = z.object({
      orgName: z.string().min(3).max(100),
      orgType: z.string().min(3).max(100),
      description: z.string().min(10).max(1000),
      email: z.string().email(),
      phoneNumber: z.string().min(10).max(15),
    });

const genAI = new GoogleGenerativeAI("AIzaSyDpTkuvocSdcfcVYg52n7-lli3rRWZsXUM");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `
       CRITICAL INSTRUCTIONS FOR CODE GENERATION:

Based on the description: “${description}”, generate a good looking One-Page Website (or Scrolling Page) in HTML format for a mini website and provide the code with the following information:
    Name of the company: ${orgName}
    Organization type: ${orgType}
    Email: ${email}
    Phone number: ${phoneNumber}

Design Guidelines
    Primary Colors:
        Base Gray: #808080 (medium gray)
        Accent Lime: #32CD32 (vibrant lime green)
    Color Distribution:
        Background: Light gray (#F0F0F0)
        Text: Charcoal gray (#333333)
        Navbar: Medium gray (#808080)
        Hover Elements: Bright lime (#32CD32)

      EXAMPLE OUTPUT: <!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello World!</h1></body></html>

      CRITICAL: 

      - The website must include ‘Contact Us’, ‘About Us’, and ‘Services’ sections.
      - The website must be responsive.
      - The website must be SEO-friendly.
      - Respond ONLY with VALID HTML code just like given in example 
      - NO additional commentary
      - no aditional space  or "\n"
      \n{format_instructions} 
        ` 

const result = await model.generateContent(prompt);
console.log(result.response.text());

res.json({data:result.response.text()})


    
// fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDpTkuvocSdcfcVYg52n7-lli3rRWZsXUM', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     contents: [{
//       parts: [{ text: 
//         `
//        CRITICAL INSTRUCTIONS FOR CODE GENERATION:
//       generate a code for One-Page Website in html format displaying hellow world:
//       EXAMPLE OUTPUT: <!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello World!</h1></body></html>

//       CRITICAL: 
//       - Respond ONLY with VALID HTML code just like given in example 
//       - NO additional commentary
//       - no aditional space  or "\n"
//       \n{format_instructions} 
//         ` 
//       }]
//     }]
//   })
// })
// .then(response => response.json())
// .then(data => {console.log(data); res.json(data.candidate)})
// .catch(error => {
//   console.log(error)
//   res.json({error:error})
// });


  } catch (error) {
    console.log(error);
  }
};

export { genSiteAi, genSiteAiGemini };
