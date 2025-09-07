import AI_recommendation from "../config/gemini-integration.js";
import { createUser, findUserByClerkId } from "../models/userModel.js";
// import AI_recommendation_fromPDF from "../config/gemini-pdf.js"; // new helper 

export async function saveProfileFromResume(req, res) {
  const resumeFile = req.file;

  if (!resumeFile) return res.status(400).json({ error: "No resume uploaded" });

  try {
    // Send PDF directly to AI model
    // const extractedData = await AI_recommendation_fromPDF(resumeFile.buffer);

    // extractedData should have: name, email, location, education, skills, experience
    // const { name, email, location, education, skills, experience } = extractedData;
    
    const name = "Mayank", email = "punmayank35@gmail.com", location = "Dehradun", education = "BCA General", skills = "React, TailwindCSS", experience = "2.3 years"  

    // Check if user exists
    // let user = await findUserByClerkId(req.body.userId);
    // if (user) return res.status(200).json({ message: "Profile already exists", user });

    // Save in DB
    // user = await createUser(req.body.userId, name, email, location, education, skills, experience);

    const recommendations = await AI_recommendation(education, skills, location);
    console.log("Recommendations: ", recommendations)
    res.json({ message: "Profile saved and AI processed successfully",  recommendations });

    // res.json({
    //   message: "Profile saved and AI processed successfully",
    //   user,
    //   extractedData,
    // });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export async function signup(req, res) {
  try {
    const { name, email, password, location, education, skills } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = await createUser(name, email, hashed, location, education, skills);

    const recommendations = await AI_recommendation(education, skills, location);
    res.json({ message: "Signup successful", user: newUser, recommendations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "supersecretkey", { expiresIn: "7d" });

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}