import AddUserForm from "@/components/common/ui/AddUserForm";
import useAddUser from "@/hooks/useAddUser";

export default function AddUser() {
  const { isLoading, handleAddUser } = useAddUser();
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-800">Add New User</h2>
      <AddUserForm isLoading={isLoading} onSubmit={handleAddUser} />
    </section>
  );
}
