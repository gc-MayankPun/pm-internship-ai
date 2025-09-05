// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const [role, setRole] = useState("student"); // Could be 'student' or 'admin'
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  // Optional: detect intended role from URL or links (e.g., /login?role=admin)
  // You could also use props/context for role selector.

  const handleInput = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual login logic:
    // Example: await loginAPI(form, role)
    // On success:
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-2">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        {/* Header + Role Switcher */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-yellow-400">Sign In</span>
          {/* Role Toggle */}
          <div className="ml-auto flex gap-1">
            <button
              className={`px-4 py-1 rounded-l-md font-medium ${
                role === "student"
                  ? "bg-yellow-300 text-gray-900"
                  : "bg-gray-700 text-gray-100"
              }`}
              onClick={() => setRole("student")}
              type="button"
            >
              Student
            </button>
            <button
              className={`px-4 py-1 rounded-r-md font-medium ${
                role === "admin"
                  ? "bg-yellow-300 text-gray-900"
                  : "bg-gray-700 text-gray-100"
              }`}
              onClick={() => setRole("admin")}
              type="button"
            >
              Employer
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            placeholder="Email"
            required
            className="rounded border-0 bg-gray-700 text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInput}
            placeholder="Password"
            required
            className="rounded border-0 bg-gray-700 text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-300 text-gray-900 font-bold rounded py-2 transition hover:bg-yellow-400"
          >
            Sign In
          </button>
        </form>

        {/* Optional: Extra Links */}
        <div className="flex justify-between mt-5 text-sm text-gray-400">
          <button
            onClick={() =>
              role === "student"
                ? navigate("/student/signup")
                : navigate("/admin/signup")
            }
            className="hover:text-yellow-300"
            type="button"
          >
            New here? Sign up
          </button>
          <a
            href="#"
            className="hover:text-yellow-300"
            // Implement actual reset password logic as needed
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
