import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const InternshipForm = () => {
  const { user, isSignedIn } = useUser();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Auto-fill fields from Clerk if signed in
  useEffect(() => {
    if (isSignedIn && user) {
      if (user.fullName) setValue("name", user.fullName);
      if (user.emailAddresses[0]?.emailAddress) {
        setValue("email", user.emailAddresses[0].emailAddress);
      }
    }
  }, [user, isSignedIn, setValue]);

  const onSubmit = async (data) => {
    try {
      const payload = {
        userId: user.id, // Clerk userId
        name: data.name || user.fullName,
        email: user.emailAddresses[0]?.emailAddress, // always from Clerk
        location: data.location,
        education: data.education,
        skills: data.skills,
      };

      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/add-profile`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        // Handle non-2xx responses
        const data = await res.json();
        toast.error(data.error || data.message || "Something went wrong");
        return;
      }

      const result = await res.json();
      console.log("Profile saved:", result);
      toast.success("Profile saved successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Server error. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        AI Internship PM Scheme Recommendation
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your full name"
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email (read-only from Clerk) */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={user?.emailAddresses[0]?.emailAddress || ""}
            readOnly
            className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            {...register("location")}
            placeholder="City or country"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block font-medium mb-1">Education</label>
          <input
            type="text"
            {...register("education")}
            placeholder="Your degree or course"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium mb-1">Skills</label>
          <input
            type="text"
            {...register("skills")}
            placeholder="Comma separated skills (e.g. React, AI, PM)"
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InternshipForm;
