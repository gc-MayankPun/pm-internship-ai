import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="min-h-[5vh] text-white flex items-center justify-between px-[1rem] py-[1rem]">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="logo image" className="h-[2rem]" />
        <span className="text-2xl font-semibold">InternDesk</span>
      </div>

      <UserButton
        afterSignOutUrl="/"
        appearance={{
          baseTheme: "dark", // keep dark base
          variables: {
            colorPrimary: "#E9CD5F", // yellow
            colorBackground: "#171C1C", // dark bg
            colorText: "white", // white text
          },
          elements: {
            userButtonPopoverActionButton: {
              color: "white", // text color for "Manage account" + "Sign out"
            },
            userButtonPopoverActionButtonText: {
              color: "white", // ensures label text is white
            },
            userButtonPopoverFooter: {
              borderTop: "1px solid #333", // optional: tweak footer line
            },
          },
        }}
      />
      {/* <SignedIn></SignedIn> */}
    </div>
  );
};

export default Header;
