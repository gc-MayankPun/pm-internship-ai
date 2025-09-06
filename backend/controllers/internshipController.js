// backend/controllers/internshipController.js
import { getAllInternships, getRecommendedInternships } from "../models/internshipModel.js";
import { findUserById } from "../models/userModel.js";

export async function listInternships(req, res) {
  try {
    const internships = await getAllInternships();
    res.json(internships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function recommendInternships(req, res) {
  try {
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const skillsArray = user.skills.split(",").map(s => s.trim());

    const recommendations = await getRecommendedInternships(skillsArray);
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}