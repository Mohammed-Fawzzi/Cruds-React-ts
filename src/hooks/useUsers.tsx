import type { User } from "@/types/users.type";
import axios from "axios";
import { useState } from "react";
import baseUrl from "@/config/baseUrl";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get<User[]>(baseUrl);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUserDetails = async (id?: string) => {
    if (!id) return;

    try {
      const { data } = await axios.get<User>(`${baseUrl}/${id}`);
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return { fetchUsers, users, setUsers, fetchUserDetails, user, setUser };
}
