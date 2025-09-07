import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const handleApply = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-[5vh] text-white flex items-center justify-between px-[1rem] py-[1rem]">
      <div
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={handleApply}
      >
        <img src={logo} alt="logo image" className="h-[2rem]" />
        <span className="text-2xl font-semibold">InternDesk</span>
      </div>

      <UserButton />
    </div>
  );
};

export default Header;
