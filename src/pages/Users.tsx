import UserDetailsModal from "@/components/common/UserDetailsModal";
import useDeleteUser from "@/hooks/useDeleteUser";
import useUsers from "@/hooks/useUsers";
import type { User } from "@/types/users.type";
import { useEffect, useState } from "react";
import Pagination from "@/components/common/Pagination.tsx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function Users() {
  const {
    fetchUsers,
    users,
    setUsers,
    currentPage,
    setCurrentPage,
    limit,
    setLimit,
    totalPages,
  } = useUsers();
  const { deleteUser } = useDeleteUser();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers(currentPage, limit);
  }, [currentPage, limit]);

  // Delete User
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
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Users Management
        </h2>

        <Link
          to={"/users/add"}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow-md transition active:scale-95"
        >
          + Add User
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f172a] p-3">
        <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-200">
          <thead className="bg-gray-100 dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 uppercase text-xs tracking-wider">
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

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users?.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-[#1e293b] transition-colors duration-150"
              >
                <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200">
                  {user.id}
                </td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  @{user.userName}
                </td>
                <td className="px-4 py-3">{user.age}</td>
                <td className="px-4 py-3">{user.phone}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
                    {user.role}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${user.active
                        ? "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300"
                        : "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300"
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
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-yellow-100 dark:bg-yellow-500/20 text-gray-700 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-500/30 transition cursor-pointer"
                    >
                      Details
                    </button>

                    <Link
                      to={`users/update/${user.id}`}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-500/30 transition"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-500/30 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          setLimit={setLimit}
        />

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