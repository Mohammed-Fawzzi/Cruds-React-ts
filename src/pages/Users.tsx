import UserDetailsModal from "@/components/common/UserDetailsModal";
import useDeleteUser from "@/hooks/useDeleteUser";
import useUsers from "@/hooks/useUsers";
import type { User } from "@/types/users.type";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function Users() {
  const { fetchUsers, users, setUsers } = useUsers();
  const { deleteUser } = useDeleteUser();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "This user will be permanently deleted",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete user",
        cancelButtonText: "Cancel",
      });

      if (!confirm.isConfirmed) return;

      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">Users Management</h2>

        <Link
          to={"/users/add"}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow-md transition active:scale-95"
        >
          + Add User
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Full Name</th>
              <th className="px-4 py-3">User Name</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user, idx) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 font-medium text-gray-800">{idx}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3 text-gray-600">@{user.userName}</td>
                <td className="px-4 py-3">{user.age}</td>
                <td className="px-4 py-3">{user.phone}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-medium">
                    {user.role}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-yellow-100 text-gray-700 hover:bg-yellow-200 transition cursor-pointer"
                    >
                      Details
                    </button>

                    <Link
                      to={`users/update/${user.id}`}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedUser && (
          <UserDetailsModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </section>
  );
}
