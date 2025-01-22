import { Router } from "express";
import { genSiteAi } from "../controller/site.controller";

const router = Router();
router.post("/genrate_site_ai", genSiteAi);
export default router;
