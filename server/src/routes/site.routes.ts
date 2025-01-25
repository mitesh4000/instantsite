import { Router } from "express";
import { genSiteAi, genSiteAiGemini } from "../controller/site.controller";

const router = Router();
router.post("/genrate_site_ai", genSiteAi);
router.post("/genrate_site_ai_gemini", genSiteAiGemini);
export default router;
