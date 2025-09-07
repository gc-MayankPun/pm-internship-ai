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

export async function createUser(clerkId, name, email, location, education, skills, experience) {
  const result = await db.query(
    `INSERT INTO users (clerk_id, name, email, location, education, skills, experience)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     ON CONFLICT (clerk_id) DO NOTHING
     RETURNING *`,
    [clerkId, name, email, location, education, skills, experience]
  );
  return result.rows[0];
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