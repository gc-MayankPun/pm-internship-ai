
import express from "express";
import { listInternships, recommendedInternships } from "../controllers/internshipController.js";

const router = express.Router();

router.get("/", listInternships);
router.post("/recommendations",  recommendedInternships);

export default router;
