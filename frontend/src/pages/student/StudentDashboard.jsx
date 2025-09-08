import { studentSettingsOptions } from "../../utils/studentSettingOptions";
import SettingsChanger from "../../components/ui/SettingsChanger"; 
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import ActiveOption from "../../utils/activeOption";

const StudentDashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-[90vh] text-white px-4 py-5 lg:px-8 lg:py-10">
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
