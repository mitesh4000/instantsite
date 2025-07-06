import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/ollama";
import { Request, Response } from "express";
import { StructuredOutputParser } from "langchain/output_parsers";
import _ from "lodash";
import mongoose from "mongoose";
import { OpenAI } from "openai";
import { z } from "zod";
import { Gen } from "../model/gen.model";
const path = require("path");
import fs from "fs";
const { GoogleGenerativeAI } = require("@google/generative-ai");

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

Output Format: <!DOCTYPE html><html lang="en">... <%- inspectElementScript %> </html>

CRITICAL: 
- Zero external dependencies except Font Awesome
- Pure CSS animations only
- Valid W3C markup
- No placeholder text
- Only output raw HTML code `;

    console.log(prompt);
    fs.appendFile("message.txt", prompt, () => {});

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

export { genSiteAiGemini, htmlSites };
