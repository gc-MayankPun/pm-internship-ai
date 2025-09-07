import data from "./internship_data.js";
const prompt = (education, skill, location) => {
  return `
${JSON.stringify(data)}
You are an internship recommendation assistant. Based on the following user profile, filter internships from the data given above, and retur internship objects.

User Profile:
- Location: ${location}
- Education: ${education}
- Skills: ${skill}

Output Requirements:
- Return only a JSON array of objects (no key like "recommendations", no code blocks, no explanations).
- Each object must have: organization, program, location, duration, stipend, eligibility, skills, perks, mode, contact_details, notes.
- If contact_details or stipend are unavailable, leave them as an empty string.
- Ensure all links are valid.

`;
};
export default prompt;
