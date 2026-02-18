import useUsers from "@/hooks/useUsers";
import { useEffect } from "react";
import Button from "./ui/Button";
import { useFormik } from "formik";
import type { UserInput, User } from "@/types/users.type";
import FormError from "./ui/FormError";
import { validationSchema } from "@/Validation/user.schema";

interface Props {
  isLoading: boolean;
  userId: string | undefined;
  onSubmit: (values: UserInput) => void;
}

const emptyValues: UserInput = {
  name: "",
  userName: "",
  email: "",
  phone: "",
  age: "",
  city: "",
  role: "",
  active: false,
};

const mapUserToInput = (user: User): UserInput => ({
  ...user,
  age: String(user.age),
});

export default function UpdateUserForm({ isLoading, onSubmit, userId }: Props) {
  const { fetchUserDetails, user } = useUsers();

  useEffect(() => {
    if (userId) fetchUserDetails(userId);
  }, [userId]);

  const formik = useFormik<UserInput>({
    enableReinitialize: true,
    initialValues: user ? mapUserToInput(user) : emptyValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="p-5">
      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div className="mt-4">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormError
            message={formik.touched.name ? formik.errors.name : undefined}
          />
        </div>

        {/* Username */}
        <div className="mt-4">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormError
            message={
              formik.touched.userName ? formik.errors.userName : undefined
            }
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormError
            message={formik.touched.email ? formik.errors.email : undefined}
          />
        </div>

        {/* Phone */}
        <div className="mt-4">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormError
            message={formik.touched.phone ? formik.errors.phone : undefined}
          />
        </div>

        {/* Age */}
        <div className="mt-4">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormError
            message={formik.touched.age ? formik.errors.age : undefined}
          />
        </div>

        {/* City */}
        <div className="mt-4">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormError
            message={formik.touched.city ? formik.errors.city : undefined}
          />
        </div>

        {/* Role */}
        <div className="mt-4">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role"
            id="role"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormError
            message={formik.touched.role ? formik.errors.role : undefined}
          />
        </div>

        {/* Status */}
        <div className="mt-5">
          <label className="block mb-2 font-medium text-gray-700">Status</label>

          <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
            <button
              type="button"
              onClick={() => formik.setFieldValue("active", true)}
              className={`px-4 py-2 ${
                formik.values.active ? "bg-green-500 text-white" : "bg-white"
              }`}
            >
              Active
            </button>

            <button
              type="button"
              onClick={() => formik.setFieldValue("active", false)}
              className={`px-4 py-2 border-l ${
                !formik.values.active ? "bg-red-500 text-white" : "bg-white"
              }`}
            >
              Inactive
            </button>
          </div>

          <FormError
            message={formik.touched.active ? formik.errors.active : undefined}
          />
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          disabled={!(formik.isValid && formik.dirty) || isLoading}
          className="mt-5"
        >
          Update User
        </Button>
      </form>
    </div>
  );
}
