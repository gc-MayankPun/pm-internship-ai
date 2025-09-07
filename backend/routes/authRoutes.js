import express from "express";
import { signup, login, saveProfileFromResume } from "../controllers/authController.js"; 
import multer from "multer";
import fs from "fs";
import path from "path";


const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); 

router.post("/signup", signup);
router.post("/login", login);
router.post("/add-profile", upload.single("resume"), saveProfileFromResume);

export default router;
