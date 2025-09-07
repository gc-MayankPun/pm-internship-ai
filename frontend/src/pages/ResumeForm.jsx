import { useForm } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const ResumeForm = () => {
  const { user } = useUser();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Validate PDF
    if (!data.resume[0].name.endsWith(".pdf")) {
      toast.error("Only PDF files are allowed!");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("userId", user?.id || "");
    formData.append("resume", data.resume[0]);

    // Show toast promise
    toast.promise(
      fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/add-profile`, {
        method: "POST",
        body: formData,
      }).then(async (res) => {
        if (!res.ok) {
          const result = await res.json();
          throw new Error(result.error || result.message || "Something went wrong");
        }  
        return res.json();
      }),
      {
        pending: "Your resume is being checked by AI...",
        success: "AI has approved your resume! Connecting you to employers.",
        error: "Resume check failed. Try again.",
      }
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-white text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
        <div>
          <label className="block font-medium mb-1">Resume PDF</label>
          <input type="file" {...register("resume")} accept=".pdf" className="w-full border p-2 rounded" />
          {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
