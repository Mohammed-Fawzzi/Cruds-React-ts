import { IoArrowRedoOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import UpdateUserForm from "@/components/common/UpdateUserForm";
import useUpdateUser from "@/hooks/useUpdateUser";

export default function UpdateUser() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { isLoading, handleUpdateUser } = useUpdateUser(id);

  return (
    <section className="shadow-lg p-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-blue-800">Update User</h2>
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 justify-center text-white font-semibold rounded-md bg-linear-to-t from-blue-500 to-purple-600 px-3 py-2 text-sm cursor-pointer"
        >
          <span>Back</span>
          <IoArrowRedoOutline />
        </button>
      </div>
      <UpdateUserForm
        isLoading={isLoading}
        onSubmit={handleUpdateUser}
        userId={id}
      />
    </section>
  );
}
