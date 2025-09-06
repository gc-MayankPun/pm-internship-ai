import { useUser } from "@clerk/clerk-react";

const AdminDashboard = () => {
  const { user } = useUser();
  console.log(user)

  return (
    <div className="border-[.1rem] min-h-[89vh] text-white">
      <p>Welcome {user.firstName} 🎉</p>
    </div>
  );
};

export default AdminDashboard;
