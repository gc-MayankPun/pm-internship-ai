import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";

const ProfileForm = () => {
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  // Update form when Clerk's user object is ready
  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        degree: user.unsafeMetadata?.degree || "",
        year: user.unsafeMetadata?.year || "",
        location: user.unsafeMetadata?.location || "",
        resumeUrl: user.unsafeMetadata?.resumeUrl || "",
        skills: user.unsafeMetadata?.skills || "",
        interests: user.unsafeMetadata?.interests || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Save back to Clerk metadata
    user.update({ unsafeMetadata: data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto rounded-xl shadow-lg text-white"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <ProfileInput
            register={register}
            label="Full Name"
            inputName="fullName"
            placeholder="Alex Doe"
            rules={{
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters." },
            }}
            errors={errors}
          />
          <ProfileInput
            register={register}
            label="Email"
            inputName="email"
            placeholder="alex.doe@example.com"
            rules={{
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            }}
            errors={errors}
          />
        </div>

        <div className="flex justify-between items-center gap-4">
          <ProfileInput
            register={register}
            label="Degree"
            inputName="degree"
            placeholder="Computer Science"
            rules={{ required: "Degree is required" }}
            errors={errors}
          />
          <ProfileInput
            register={register}
            label="Year of Study"
            inputName="year"
            placeholder="3rd Year"
            rules={{ required: "Year is required" }}
            errors={errors}
          />
        </div>

        <div className="flex justify-between items-center gap-4">
          <ProfileInput
            register={register}
            label="Preferred Location"
            inputName="location"
            placeholder="San Francisco"
            rules={{ required: "Location is required" }}
            errors={errors}
          />
          <ProfileInput
            register={register}
            label="Resume URL"
            inputName="resumeUrl"
            placeholder="https://example.com/resume.pdf"
            // rules={{
            //   required: "Resume URL is required",
            //   pattern: {
            //     value: /^(http|https):\/\/[^ "]+$/,
            //     message: "Please enter a valid URL",
            //   },
            // }}
            errors={errors}
          />
        </div>

        <ProfileTextarea
          register={register}
          label="Skills"
          inputName="skills"
          placeholder="JavaScript, React, Node.js..."
          rules={{ required: "At least one skill is required" }}
          errors={errors}
        />
        <ProfileTextarea
          register={register}
          label="Interests"
          inputName="interests"
          placeholder="Web Development, AI, UX/UI Design..."
          rules={{ required: "At least one interest is required" }}
          errors={errors}
        />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};

const ProfileInput = ({ label, register, inputName, rules, errors, placeholder }) => (
  <div className="w-full">
    <label htmlFor={inputName} className="block text-sm text-gray-300 mb-1">
      {label}
    </label>
    <input
      id={inputName}
      placeholder={placeholder}
      {...register(inputName, rules)}
      className={`w-full p-2 rounded-md bg-[#111] text-white outline-none focus:ring-2 focus:ring-yellow-400 ${
        errors[inputName] ? "border border-red-500" : ""
      }`}
    />
    {errors[inputName] && (
      <p className="text-red-400 text-sm mt-1">{errors[inputName].message}</p>
    )}
  </div>
);

const ProfileTextarea = ({ label, register, inputName, rules, errors, placeholder }) => (
  <div className="md:col-span-2">
    <label htmlFor={inputName} className="block text-sm text-gray-300 mb-1">
      {label}
    </label>
    <textarea
      id={inputName}
      placeholder={placeholder}
      {...register(inputName, rules)}
      className={`w-full p-2 rounded-md bg-[#111] text-white outline-none focus:ring-2 focus:ring-yellow-400 ${
        errors[inputName] ? "border border-red-500" : ""
      }`}
      rows={2}
    />
    {errors[inputName] && (
      <p className="text-red-400 text-sm mt-1">{errors[inputName].message}</p>
    )}
  </div>
);

export default ProfileForm;
