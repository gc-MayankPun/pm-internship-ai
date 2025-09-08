// backend/controllers/internshipController.js
import { getAllInternships, getRecommendedInternships } from "../models/internshipModel.js";
import { findUserById } from "../models/userModel.js";

export async function listInternships(req, res) {
  try {
    const internships = await getAllInternships();
    return res.json(internships);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

export async function recommendedInternships(req, res) {
  try {
    const email = req.body.email;

    const recommendations = await getRecommendedInternships(email);

    return res.json(recommendations);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}