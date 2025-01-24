import { Router } from "express";
import { genSiteAi, genSiteAiDeepSeek } from "../controller/site.controller";

const router = Router();
router.post("/genrate_site_ai", genSiteAi);
router.post("/genrate_site_deep_seek", genSiteAiDeepSeek);
export default router;
