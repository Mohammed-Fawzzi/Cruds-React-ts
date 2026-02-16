import { useState, useCallback } from "react";
import axios from "axios";
import type { User } from "@/types/users.type";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<User[]>("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchUsers, loading, users, setUsers };
}
export const deleteUser = async (id: number) => {
  await axios.delete(`http://localhost:3000/users/${id}`);
};
