import { useEffect } from "react";
import { useUsers, deleteUser } from "@/hooks/useUsers";
import Loading from "@/components/Loading";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Users() {
  const { fetchUsers, loading, users, setUsers } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!confirm.isConfirmed) return;
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error: unknown) {
      console.log(error);
    }
  };

  if (loading) return <Loading />;

  return (
    <section className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Users Management</h1>

        <button
          onClick={() => navigate("/users/add")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition"
        >
          + Add User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Username</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="p-4 font-medium text-gray-800">{user.id}</td>
                <td className="p-4 font-medium text-gray-800">{user.name}</td>

                <td className="p-4 text-gray-500">@{user.username}</td>

                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.city}</td>
                <td className="p-4">{user.role}</td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.active
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => navigate(`/users/update/${user.id}`)}
                      className="px-3 py-1 text-xs rounded-md bg-amber-100 hover:bg-amber-200 text-amber-700 transition"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1 text-xs rounded-md bg-red-100 hover:bg-red-200 text-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
