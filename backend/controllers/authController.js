import AI_recommendation from "../config/gemini-integration.js";
import {
  createUser,
  findUserByEmail,
  findUserByClerkId,
} from "../models/userModel.js";

export async function signup(req, res) {
  try {
    const { fullName, email, degree, year, location, skills, interests } = req.body;

    let recommendations = await AI_recommendation(
      degree,
      skills,
      location,
      interests
    );

    const newUser = await createUser(
      fullName,
      email,
      degree,
      year,
      location,
      skills,
      interests,
      recommendations
    );

    // return res.json(newUser); // 👈 better: return the full user object
    return res.json(recommendations);
  } catch (err) {
    // console.error("Signup error:", err); // 👈 will show Postgres error in your terminal
    return res.status(500).json({ error: err.message });
  }
}
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "supersecretkey",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
