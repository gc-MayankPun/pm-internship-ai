import AI_recommendation from "../config/gemini-integration.js";
import {
  createUser,
  findUserByEmail,
  findUserByClerkId,
} from "../models/userModel.js";

export async function signup(req, res) {
  // console.log("Request Hit");
  try {
    // const { name, email, password, location, education, skills } = req.body;
    const { fullName, email, degree, year, location, skills, interests } =
      req.body;

    // console.log("Req body Object: ", req.body);

    // const existingUser = await findUserByEmail(email);
    // console.log("User Exists: ", existingUser);

    // if (existingUser)
    //   return res.status(400).json({ message: "User already exists" });

    // const hashed = await bcrypt.hash(password, 10);
    // const newUser = await createUser(
    //   fullName,
    //   email,
    //   // hashed,
    //   location,
    //   education,
    //   skills,
    //   Degree,
    //   experience,
    //   interests
    // );
    // console.log("User Created: ", newUser)

    let recommendations = await AI_recommendation(
      degree,
      skills,
      location,
      interests
    );

    return res.json(recommendations);
  } catch (err) {
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
