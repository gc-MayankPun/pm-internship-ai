import { IoBriefcase } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";

const AllInternships = ({selectedOption}) => {
  return <ShowSettingsContent selectedOption={selectedOption} />;
};

const ShowSettingsContent = ({selectedOption}) => { 
  const data = {
    organization: "Crobstacle Ventures LLP",
    program: "WordPress Development",
    location: "Dehradun",
    duration: "3 Months (Start: Immediately)",
    stipend: "₹ 4,500 – 10,000 /month",
    eligibility:
      "From Dehradun only, Relevant skills/interests , Engg/CS/IT students or fresh graduates.",
    skills:
      "CSS, HTML, JavaScript, jQuery, MySQL, Node.js, PHP, React, SEO, WordPress",
    perks:
      "Certificate, Letter of Recommendation, Informal dress code, Job offer",
    mode: "In-office",
    contact_details: "",
    notes: null,
  };

  const {
    organization,
    program,
    location,
    duration,
    stipend,
    eligibility,
    skills,
    perks,
    mode,
    contact_details,
    notes,
  } = data;

  return (
    // <div className="py-4">
    <div className="mt-4 p-4 bg-[#1C2222] rounded-md border-[.1rem] border-[var(--primary-text-muted)]">
      <div className="">
        <h2 className="text-2xl font-semibold">{selectedOption.heading}</h2>
        <p className="text-sm text-[var(--primary-text-muted)]">
          {selectedOption.subheading}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <SettingsCard
          organization={organization}
          program={program}
          location={location}
          duration={duration}
          stipend={stipend}
          eligibility={eligibility}
          skills={skills}
          perks={perks}
          mode={mode}
          contact_details={contact_details}
          notes={notes}
        />
        <SettingsCard
          organization={organization}
          program={program}
          location={location}
          duration={duration}
          stipend={stipend}
          eligibility={eligibility}
          skills={skills}
          perks={perks}
          mode={mode}
          contact_details={contact_details}
          notes={notes}
        />
        <SettingsCard
          organization={organization}
          program={program}
          location={location}
          duration={duration}
          stipend={stipend}
          eligibility={eligibility}
          skills={skills}
          perks={perks}
          mode={mode}
          contact_details={contact_details}
          notes={notes}
        />
        <SettingsCard
          organization={organization}
          program={program}
          location={location}
          duration={duration}
          stipend={stipend}
          eligibility={eligibility}
          skills={skills}
          perks={perks}
          mode={mode}
          contact_details={contact_details}
          notes={notes}
        />
      </div>
    </div>
  );
};

const SettingsCard = ({
  organization,
  program,
  location,
  duration,
  stipend,
  eligibility,
  skills,
  perks,
  mode,
  contact_details,
  notes,
}) => {
  return (
    <div className="border-[.1rem] min-h-[20rem] w-[22rem] p-3 rounded-lg text-[var(--primary-text-muted)] bg-[#1a1a1a] shadow-md">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-white">{program}</h2>
        <h3 className="flex items-center gap-2 text-sm">
          <IoBriefcase />
          {organization}
        </h3>
      </div>

      {/* Perks */}
      <p className="text-sm italic">{perks}</p>

      {/* Skills */}
      <div className="my-4">
        <p className="text-sm mb-1">Requirements:</p>
        <div className="flex flex-wrap gap-2">
          {skills.split(", ").map((skill) => (
            <SettingCardSkills key={skill} skill={skill} />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="my-3 text-sm space-y-1">
        <p className="flex items-center gap-2">
          <IoLocationSharp /> {location}
        </p>
        <p className="flex items-center gap-2">
          <FaRupeeSign /> {stipend || "Not specified"}
        </p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Eligibility:</strong> {eligibility}
        </p>
        <p>
          <strong>Mode:</strong> {mode}
        </p>
        {contact_details && (
          <p>
            <strong>Contact:</strong>{" "}
            <a
              href={contact_details}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline"
            >
              {contact_details}
            </a>
          </p>
        )}
        {notes && (
          <p>
            <strong>Notes:</strong> {notes}
          </p>
        )}
      </div>

      {/* CTA */}
      <button className="bg-[#FFE066] text-black w-full py-2 rounded-md text-sm font-semibold hover:bg-yellow-400 transition">
        Apply Now
      </button>
    </div>
  );
};

const SettingCardSkills = ({ skill }) => {
  return (
    <span className="bg-[#2B3434] text-white rounded-xl px-2 text-xs py-1">
      {skill}
    </span>
  );
};

export default AllInternships;
