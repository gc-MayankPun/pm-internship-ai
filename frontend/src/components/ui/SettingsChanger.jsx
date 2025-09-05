import React from "react";

const SettingsChanger = ({ settingsData }) => {
  return (
    <div className="border-[.1rem] w-fit p-1 flex gap-2 rounded-md">
      {settingsData.map((option) => {
        return <SettingValue key={option.id} optionName={option.optionName} />;
      })}
    </div>
  );
};

const SettingValue = ({ optionName }) => {
  return (
    <div className="rounded-md cursor-pointer min-w-[6rem]">
      <p className="text-sm text-[var(--primary-text-muted)] px-4 py-1 rounded-md text-center">{optionName}</p>
    </div>
  );
};

export default SettingsChanger;
