import React from "react";
import SettingsChanger from "../../components/ui/SettingsChanger";
import { studentSettingsOptions } from "../../api/studentSettingOptions";

const StudentDashboard = () => {
  return (
    <div className="h-screen text-white px-6 py-10">
      <div className="student-details">
        <h1 className="lg:text-4xl font-bold">Welcome, Manthi</h1>
        <p className="text-sm text-[var(--primary-text-muted)] mt-2">Your personal internship command center</p>
      </div>

      <SettingsChanger settingsData={studentSettingsOptions} />
    </div>
  );
};

export default StudentDashboard;
