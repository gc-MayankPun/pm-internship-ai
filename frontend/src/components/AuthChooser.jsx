import { useNavigate } from "react-router-dom";

export default function AuthChooser() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Get Started</h2>
        <p className="text-gray-200 mt-2">Login or Sign up as Student or Admin</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
        {/* Student Card */}
        <div className="flex-1 bg-gray-800 rounded-xl shadow-md p-8 flex flex-col items-center">
          <span className="bg-yellow-300 text-xl px-4 py-2 rounded-full mb-4 text-gray-800 font-bold">
            Student
          </span>
          <p className="text-gray-200 mb-7 text-center">
            Access personalized internships, build your profile, and more.
          </p>
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={() => navigate("/student/login")}
              className="bg-yellow-300 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-400 transition"
            >
              Login as Student
            </button>
            <button
              onClick={() => navigate("/student/signup")}
              className="bg-gray-700 text-gray-100 border border-yellow-300 py-2 rounded hover:bg-gray-600"
            >
              Sign up as Student
            </button>
          </div>
        </div>

        {/* Admin Card */}
        <div className="flex-1 bg-gray-800 rounded-xl shadow-md p-8 flex flex-col items-center">
          <span className="bg-yellow-300 text-xl px-4 py-2 rounded-full mb-4 text-gray-800 font-bold">
            Admin
          </span>
          <p className="text-gray-200 mb-7 text-center">
            Manage internships, review applicants, and access admin tools.
          </p>
          <div className="flex flex-col w-full gap-3">
            <button
              onClick={() => navigate("/admin/login")}
              className="bg-yellow-300 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-400 transition"
            >
              Login as Admin
            </button>
            <button
              onClick={() => navigate("/admin/signup")}
              className="bg-gray-700 text-gray-100 border border-yellow-300 py-2 rounded hover:bg-gray-600"
            >
              Sign up as Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
