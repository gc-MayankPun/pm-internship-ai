import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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
      if (user.emailAddresses[0]?.emailAddress)
        setValue("email", user.emailAddresses[0].emailAddress);
    }
  }, [user, isSignedIn, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Form submitted:", response.data);

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error("Error submitting form", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md mt-10 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        AI Internship PM Scheme Recommendation
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Full Name"
          name="name"
          register={register}
          rules={{ required: "Name is required" }}
          placeholder="Enter your full name"
          errors={errors}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          register={register}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
          placeholder="Enter your email"
          errors={errors}
        />

        {/* Only show password if user didn't sign in via Google/External */}
        {!user?.externalAccounts?.length && (
          <Input
            label="Password"
            type="password"
            name="password"
            register={register}
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            }}
            placeholder="Enter a password"
            errors={errors}
          />
        )}

        <Input
          label="Location"
          name="location"
          register={register}
          rules={{ required: "Location is required" }}
          placeholder="City or country"
          errors={errors}
        />

        <Input
          label="Education"
          name="education"
          register={register}
          rules={{ required: "Education is required" }}
          placeholder="Your degree or course"
          errors={errors}
        />

        <Input
          label="Skills"
          name="skills"
          register={register}
          rules={{ required: "Skills are required" }}
          placeholder="Comma separated skills (e.g. React, AI, PM)"
          errors={errors}
        />

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

const Input = ({
  label,
  type = "text",
  register,
  name,
  rules = {},
  placeholder,
  errors,
}) => {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        {...register(name, rules)}
        placeholder={placeholder}
        className="w-full border p-2 rounded placeholder:text-white"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-2">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InternshipForm;
