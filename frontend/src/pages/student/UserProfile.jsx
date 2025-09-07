import ProfileForm from "../../components/ui/ProfileForm";

const UserProfile = ({ selectedOption }) => {
  return (
    <div className="mt-4 p-4 bg-[#1C2222] rounded-md border-[.1rem] border-[var(--primary-text-muted)]">
      <div className="">
        <h2 className="text-2xl font-semibold">{selectedOption.heading}</h2>
        <p className="text-sm text-[var(--primary-text-muted)]">
          {selectedOption.subheading}
        </p>
      </div>

      <div className="mt-4">
        <ProfileForm />
      </div>
    </div>
  );
};

// import { useForm } from "react-hook-form";

// const ProfileForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   console.log(watch("example"));

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <ProfileInput
//         register={register}
//         label={"Full Name"}
//         inputName={"text"}
//         errors={errors}
//         placeholder={"Enter full name"}
//       />
//     </form>
//   );
// };

// const ProfileInput = ({ label, register, inputName, errors, placeholder }) => {
//   return (
//     <div>
//       <label htmlFor={label}>{label}</label>
//       <input id={label} {...register(inputName, { required: true })} placeholder={placeholder} />
//       {errors[inputName] && <span>This field is required</span>}
//     </div>
//   );
// };

export default UserProfile;
