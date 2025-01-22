import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";
import { Request, Response } from "express";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";

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

    if (inputBodySchems.safeParse(req.body).success === false) {
      return res.status(400).json({
        error: "Validation failed",
        issues: inputBodySchems
          .safeParse(req.body)
          .error?.issues?.map(
            (item, index) => `${item.path[0]} - ${item.message}`
          ),
      });
    }

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

      CRITICAL INSTRUCTIONS FOR CODE GENERATION:
      Based on the description: "${description}", 
      
      generate a One-Page Website (or Scrolling Page) in html format for mini website and provide the code with following information:
      1. name of the company is ${orgName}
      2. orgnization type is ${orgName}
      3. email:- ${email} 
      4. phone number:- ${phoneNumber}
      

      CRITICAL: 
      - must have contact us,about us, services section
      - must have to be responsive
      - must have to be SEO friendly
      - must have to be in html format
      - Respond ONLY with VALID JSON with only one field htmlCode
      - Use EXACT schema format
      - NO additional commentary
      \n{format_instructions}


    `);

    const prompt1 = PromptTemplate.fromTemplate(`

      CRITICAL INSTRUCTIONS FOR CODE GENERATION:
      generate a Website  html format displaying hellow world:
      

      CRITICAL: 
      - Respond ONLY with VALID JSON with only one field htmlCode
      - Use EXACT schema format
      - NO additional commentary
      \n{format_instructions}


    `);

    const chain = prompt1.pipe(ollama).pipe(parser);

    console.log(parser.getFormatInstructions());
    const llmResponse = await chain.invoke({
      format_instructions: parser.getFormatInstructions(),
    });

    console.log(llmResponse);

    return res.status(200).json({
      data: llmResponse.htmlCode,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return res.status(500).json({ error: errorMessage });
  }
};

export { genSiteAi };
