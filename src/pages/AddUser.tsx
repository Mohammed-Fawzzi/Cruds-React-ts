import AddUserForm from "@/components/common/ui/AddUserForm";
import useAddUser from "@/hooks/useAddUser";
import { IoArrowRedoOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const { isLoading, handleAddUser } = useAddUser();
  const navigate = useNavigate();

  return (
    <section className="shadow-lg p-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-blue-800">Add New User</h2>
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 justify-center text-white font-semibold rounded-md bg-gradient-to-t from-blue-500 to-purple-600 px-3 py-2 text-sm cursor-pointer"
        >
          <span>Back</span>
          <IoArrowRedoOutline />
        </button>
      </div>
      <AddUserForm isLoading={isLoading} onSubmit={handleAddUser} />
    </section>
  );
}
