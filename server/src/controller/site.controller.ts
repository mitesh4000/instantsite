import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";
import { Request, Response } from "express";
import { StructuredOutputParser } from "langchain/output_parsers";
import _ from "lodash";
import mongoose from "mongoose";
import { OpenAI } from "openai";
import { z } from "zod";
import { Gen } from "../model/gen.model";
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
    const {
      orgName,
      orgType,
      description,
      email,
      phoneNumber,
      businessType,
      designPreferences,
      projectPurpose,
      targetAudience,
    } = req.body;
    console.log(req.body);
    const inputBodySchems = z.object({
      orgName: z.string().min(3).max(100),
      orgType: z.string().min(3).max(100),
      description: z.string().min(10).max(1000),
      email: z.string().email(),
      phoneNumber: z.string().min(10).max(15),
    });

    const genAI = new GoogleGenerativeAI(
      "AIzaSyDpTkuvocSdcfcVYg52n7-lli3rRWZsXUM"
    );
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-thinking-exp-01-21",
    });

    const prompt = `CRITICAL INSTRUCTIONS FOR PREMIUM WEBSITE GENERATION:
Generate an innovative, conversion-optimized one-page website with cutting-edge UI/UX and built-in SEO in valid HTML5 format.

Company Profile:
- Name: ${orgName}
- Industry: ${businessType}
- Contact: ${email} | ${phoneNumber}
- Unique Value: ${projectPurpose}

Creative Direction:
- Design Style: ${designPreferences} 
- Audience: ${targetAudience}
- Emotion: Trustworthy yet innovative
- Differentiator: Memorable micro-interactions

Technical Excellence Requirements:

1. UI/UX INNOVATIONS:
   - Dynamic glassmorphism design elements
   - Subtle animations on scroll (GSAP-inspired)
   - Intelligent white space utilization
   - Mobile-optimized touch targets
   - Dark/light mode toggle
   - 3D hover effects on cards
   - Custom cursor effects

2. VISUAL HIERARCHY:
   - Gradient overlays (#808080 to #32CD32)
   - Modern font pairings (Montserrat + Poppins)
   - Strategic color psychology implementation
   - SVG illustrations for scalability
   - Parallax scrolling sections

3. SEO OPTIMIZATION:
   - Semantic HTML5 structure
   - JSON-LD schema markup
   - Optimized meta tags
   - Semantic URL fragments
   - Lazy-loaded images
   - ALT text for all visuals
   - Open Graph meta tags

4. SECTIONS ARCHITECTURE:
   [Hero]
   - Fullscreen video/particle background
   - Animated CTA button
   - Scroll indicator

   [About]
   - Interactive timeline
   - Team member holographic cards
   - Stats counter animation

   [Services]
   - 3D rotating service cards
   - Comparison tables
   - Testimonial carousel

   [Contact]
   - Smart form with validation
   - Interactive map
   - Social media integration

5. PERFORMANCE:
   - Critical CSS inlined
   - WebP image format
   - Minimal external requests
   - Async loading
   - Cache optimization hints
   - Make html minify 

6. ACCESSIBILITY:
   - WCAG AA compliant
   - Keyboard navigation
   - Reduced motion option
   - Proper contrast ratios
   - Screen reader optimized

Output Format: <!DOCTYPE html><html lang="en">...</html>

CRITICAL: 
- Zero external dependencies except Font Awesome
- Pure CSS animations only
- Valid W3C markup
- No placeholder text
- Only output raw HTML code `;

    const result = await model.generateContent(prompt);
    const outputHtml = _.replace(
      _.replace(result.response.text(), "```html", ""),
      "```",
      ""
    );

    const record = new Gen();

    record.html = outputHtml;
    await record.save();

    res.json({
      data: outputHtml,
      _id: record._id,
    });
  } catch (error) {
    console.log(error);
  }
};

const htmlSites = async (req: Request, res: Response) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.params.id);

    if (!_id) {
      res.send("");
    } else {
      const record = await Gen.findOne({ _id });
      res.send(record?.html || "");
    }
  } catch (err) {}
};

export { genSiteAi, genSiteAiGemini, htmlSites };
