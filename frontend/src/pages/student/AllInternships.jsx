import { IoBriefcase } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";


const AllInternships = ({ selectedOption }) => {
  return <ShowSettingsContent selectedOption={selectedOption} />;
};

const ShowSettingsContent = ({ selectedOption }) => {
  const data = {
    applyLink: "https://letsgrowmore.in/internship/",
    contact_details: "",
    duration: "1 Month",
    eligibility: "Students from any background",
    location: "Remote",
    mode: "Remote",
    organization: "The Sparks Foundation",
    perks: "Certificate, Letter of Recommendation",
    program: "Web Development Internship",
    skills: ["HTML", "CSS", "JavaScript"],
    stipend: "unpaid",
  };

  return ( 
    <div className="mt-4 p-4 bg-[#1C2222] rounded-md border-[.1rem] border-[var(--primary-text-muted)]">
      <div className="">
        <h2 className="text-2xl font-semibold">{selectedOption.heading}</h2>
        <p className="text-sm text-[var(--primary-text-muted)]">
          {selectedOption.subheading}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <SettingsCard {...data} />
        <SettingsCard {...data} />
        <SettingsCard {...data} />
        <SettingsCard {...data} />
      </div>
    </div>
  );
};

const SettingsCard = (props) => {
  // Redirect user to the apply link
  const handleApply = () => {
    window.open(props.applyLink, "_blank"); // opens in new tab 
    // OR use: window.location.href = internship.applyLink; // same tab
  };

  return (
    <div className="border-[.1rem] min-h-[20rem] w-[22rem] p-6 rounded-lg text-[var(--primary-text-muted)] bg-[#1a1a1a] shadow-md">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-white">{props.program}</h2>
        <h3 className="flex items-center gap-2 text-sm">
          <IoBriefcase />
          {props.organization}
        </h3>
      </div>

      {/* Perks */}
      <p className="text-sm italic">{props.perks}</p>

      {/* Skills */}
      <div className="my-4">
        <p className="text-sm mb-1">Requirements:</p>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill) => (
            <SettingCardSkills key={skill} skill={skill} />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="my-3 text-sm space-y-1">
        <p className="flex items-center gap-2">
          <IoLocationSharp /> {props.location}
        </p>
        <p className="flex items-center gap-2">
          <FaRupeeSign /> {props.stipend || "Not specified"}
        </p>
        <p>
          <strong>Duration:</strong> {props.duration}
        </p>
        <p>
          <strong>Eligibility:</strong> {props.eligibility}
        </p>
        <p>
          <strong>Mode:</strong> {props.mode}
        </p>
        {props.contact_details && (
          <p>
            <strong>Contact:</strong>
            <a
              href={props.contact_details}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline"
            >
              {props.contact_details}
            </a>
          </p>
        )}
      </div>

      {/* CTA */}
      <button className="bg-[#FFE066] text-black w-full py-2 rounded-md text-sm font-semibold cursor-pointer hover:bg-yellow-400 transition" onClick={handleApply}>
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
