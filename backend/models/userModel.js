import db from "../config/db.js";

// export async function createUser(name, email, hashedPassword, education, skills) {
//   const result = await db.query(
//     `INSERT INTO users (name, email, password, education, skills) 
//      VALUES ($1, $2, $3, $4, $5) 
//      RETURNING id, name, email, education, skills`,
//     [name, email, hashedPassword, education, skills]
//   );
//   return result.rows[0];
// }

export async function createUser(
  fullName,
  email,
  degree,
  year,
  location,
  skills,
  interests,
  recommendations
) {
  const result = await db.query(
    `INSERT INTO users (full_name, email, degree, year, location, skills, interests, recommendations)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     ON CONFLICT (email) DO UPDATE
     SET full_name = EXCLUDED.full_name,
         degree = EXCLUDED.degree,
         year = EXCLUDED.year,
         location = EXCLUDED.location,
         skills = EXCLUDED.skills,
         interests = EXCLUDED.interests,
         recommendations = EXCLUDED.recommendations
     RETURNING *`,
    [
      fullName,
      email,
      degree,
      year,
      location,
      JSON.stringify(skills),        // 👈 make sure arrays/objects are stored as JSON
      JSON.stringify(interests),     // 👈 same
      JSON.stringify(recommendations) // 👈 same
    ]
  );
}

export async function findUserByClerkId(clerkId) {
  const result = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [clerkId]);
  return result.rows[0];
}


export async function findUserByEmail(email) {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
}


export async function findUserById(id) {
  const result = await db.query(
    "SELECT id, name, email, education, skills FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0];
}