import type { User } from "@/types/users.type";
import { FaX } from "react-icons/fa6";

interface Props {
  user: User;
  onClose: () => void;
}

export default function UserDetailsModal({ user, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-120 max-w-[95%] rounded-2xl bg-white shadow-2xl p-6 relative animate-scaleIn"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
        >
          <FaX />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 mt-3">
          <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 text-sm">@{user.userName}</p>
          </div>

          <span
            className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
              user.active
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user.active ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
          {/* Email */}
          <div>
            <p className="text-gray-400 text-xs mb-1">Email</p>
            <a
              href={`mailto:${user.email}`}
              className="font-medium text-indigo-600 hover:underline font-mono"
            >
              {user.email}
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400 text-xs mb-1">Phone</p>
            <a
              href={`https://wa.me/${user.phone}`}
              target="_blank"
              className="font-medium text-green-600 hover:underline"
            >
              WhatsApp
            </a>
          </div>

          {/* Age */}
          <div>
            <p className="text-gray-400 text-xs mb-1">Age</p>
            <p className="font-medium text-gray-800">{user.age}</p>
          </div>

          {/* City */}
          <div>
            <p className="text-gray-400 text-xs mb-1">City</p>
            <p className="font-medium text-gray-800">{user.city}</p>
          </div>

          {/* Role */}
          <div>
            <p className="text-gray-400 text-xs mb-1">Role</p>
            <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-700 text-xs font-medium">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
