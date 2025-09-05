
import express from "express";
import { listInternships, recommendInternships } from "../controllers/internshipController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", listInternships);
router.get("/recommendations", authMiddleware, recommendInternships);

export default router;
