import SettingsChanger from "../../components/ui/SettingsChanger";
import { studentSettingsOptions } from "../../api/studentSettingOptions";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import ActiveOption from "../../utils/activeOption";

// Expected output
// {
//     "organization": "Crobstacle Ventures LLP",
//     "program": "WordPress Development",
//     "location": "Dehradun",
//     "duration": "3 Months (Start: Immediately)",
//     "stipend": "₹ 4,500 – 10,000 /month (Fixed + Incentives) Job offer: ₹ 2 LPA post internship",
//     "eligibility": "From Dehradun only, Relevant skills/interests , Engg/CS/IT students or fresh graduates.",
//     "skills": "CSS, HTML, JavaScript, jQuery, MySQL, Node.js, PHP, React, SEO, WordPress",
//     "perks": "Certificate, Letter of Recommendation, Informal dress code, Job offer",
//     "mode": "In-office",
//     "contact_details": "",
//     "notes": null
//   }

const StudentDashboard = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="min-h-[90vh] text-white px-8 py-10">
      <div className="student-details">
        <h1 className="lg:text-4xl font-bold">Welcome, {user.firstName}</h1>
        <p className="text-sm text-[var(--primary-text-muted)] mt-2">
          Your personal internship command center
        </p>
      </div>

      <div className="min-h-screen mt-4">
        <UserDetailsDashboard />
      </div>
    </div>
  );
};

const UserDetailsDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(
    studentSettingsOptions[0].optionName
  );

  return (
    <>
      <SettingsChanger
        settingsData={studentSettingsOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ActiveOption selected={selectedOption} />
    </>
  );
};

export default StudentDashboard;
