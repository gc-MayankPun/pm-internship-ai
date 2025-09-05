
import db from "../config/db.js";


export async function getAllInternships() {
  const result = await db.query("SELECT * FROM internships");
  return result.rows;
}


export async function getRecommendedInternships(userSkills) {
  const result = await db.query(
    `SELECT * FROM internships 
     WHERE skills_required ILIKE ANY ($1)`,
    [userSkills.map(skill => `%${skill}%`)]
  );
  return result.rows;
}
