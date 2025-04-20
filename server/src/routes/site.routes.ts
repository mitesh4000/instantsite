import { Router } from "express";
import {
  genSiteAi,
  genSiteAiGemini,
  htmlSites,
} from "../controller/site.controller";

const router = Router();
router.post("/genrate_site_ai", genSiteAi);
router.post("/genrate_site_ai_gemini", genSiteAiGemini);
router.get("/sites/:id", htmlSites);
export default router;
