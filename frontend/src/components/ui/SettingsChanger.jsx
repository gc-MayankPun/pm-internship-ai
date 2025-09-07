import { IoBriefcase } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";
import { GoOrganization } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const iconMap = {
  Recommended: <GrOrganization />,
  "My Applications": <IoBriefcase />,
  "My Profile": <FaRegUserCircle />,
  "All Internships": <IoDocumentTextOutline />,
};

const SettingsChanger = ({
  settingsData,
  selectedOption,
  setSelectedOption, 
}) => {
  return (
    <div className="border-[.1rem] w-fit p-1 flex gap-2 rounded-md">
      {settingsData.map((option) => (
        <SettingValue
          key={option.id} 
          optionName={option.optionName}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      ))}
    </div>
  );
};

const SettingValue = ({ 
  optionName,
  selectedOption,
  setSelectedOption,
}) => {
  const isSelected = selectedOption === optionName;
  const icon = iconMap[optionName]

  return (
    <div
      className={`rounded-md cursor-pointer min-w-[6rem] transition ${
        isSelected ? "bg-blue-600 text-white" : "bg-transparent"
      }`}
      onClick={() => setSelectedOption(optionName)}
    >
      <p className="text-sm px-4 py-1 rounded-md text-center flex items-center justify-center gap-2">
        {icon}
        {optionName}
      </p>
    </div>
  );
};

export default SettingsChanger;
