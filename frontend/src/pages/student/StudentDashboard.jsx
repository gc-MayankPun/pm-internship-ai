import SettingsChanger from "../../components/ui/SettingsChanger";
import { studentSettingsOptions } from "../../api/studentSettingOptions";
import { useUser } from "@clerk/clerk-react";

const StudentDashboard = () => {
  const { user } = useUser(); 
  console.log(user);

  return (
    <div className="min-h-[90vh] text-white px-6 py-10">
      <div className="student-details">
        <h1 className="lg:text-4xl font-bold">Welcome, {user.firstName}</h1>
        <p className="text-sm text-[var(--primary-text-muted)] mt-2">
          Your personal internship command center
        </p>  
      </div>

      <SettingsChanger settingsData={studentSettingsOptions} />
    </div>
  );
};

export default StudentDashboard;
