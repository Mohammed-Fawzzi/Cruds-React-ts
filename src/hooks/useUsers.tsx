import type { User } from "@/types/users.type";
import axios from "axios";
import { useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get<User[]>("http://localhost:3000/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return { fetchUsers, users, setUsers };
}
