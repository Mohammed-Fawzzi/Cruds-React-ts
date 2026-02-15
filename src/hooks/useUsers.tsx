import axios from "axios";
import { useState, useCallback } from "react";
import { type User } from "@/types/users.type";

export default function useUsers() {
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

  return { fetchUsers, loading, users };
}
