
import db from "../config/db.js";


export async function getAllInternships() {
  const result = await db.query("SELECT * FROM internships");
  return result.rows;
}

export async function getRecommendedInternships(email) {
  const result = await db.query(
    `SELECT recommendations FROM users 
     WHERE email = ($1)`,
    [email]
  );
  return result.rows;
}