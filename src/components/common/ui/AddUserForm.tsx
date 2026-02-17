import Button from "./Button";
import { useFormik } from "formik";
import type { UserInput } from "@/types/users.type";
import FormError from "./FormError";
import { validationSchema } from "@/Validation/user.schema";

interface Props {
  isLoading: boolean;
  onSubmit: (values: UserInput) => void;
}

export default function AddUserForm({ isLoading, onSubmit }: Props) {
  const formik = useFormik<UserInput>({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      phone: "",
      age: "",
      city: "",
      role: "",
    },
    onSubmit,
    validationSchema,
  });

  return (
    <div className="shadow-lg p-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-4">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ex: Mohamed Fawzzi"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <FormError
            message={formik.touched.name ? formik.errors.name : undefined}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Ex: mohamed@14"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          <FormError
            message={
              formik.touched.userName ? formik.errors.userName : undefined
            }
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Ex: ex@example.com"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormError
            message={formik.touched.email ? formik.errors.email : undefined}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Ex: +966 054 xxx xxxx"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <FormError
            message={formik.touched.phone ? formik.errors.phone : undefined}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Ex: 25"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          <FormError
            message={formik.touched.age ? formik.errors.age : undefined}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Ex: +966 054 xxx xxxx"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <FormError
            message={formik.touched.city ? formik.errors.city : undefined}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Ex: +966 054 xxx xxxx"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.role}
          />
          <FormError
            message={formik.touched.role ? formik.errors.role : undefined}
          />
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          disabled={!(formik.isValid && formik.dirty) || isLoading}
          className="mt-5"
        >
          اضافة مستخدم
        </Button>
      </form>
    </div>
  );
}
