import { 
  SignedIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const AdminDashboard = () => {
  const { user } = useUser();

  return (
    <div className="text-white">
      <p>Welcome {user.firstName} 🎉</p>
      <SignedIn>
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
      </SignedIn>
    </div>
  );
};

export default AdminDashboard;
