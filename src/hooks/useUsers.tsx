import type { User } from "@/types/users.type";
import axios from "axios";
import { useState } from "react";
import baseUrl from "@/config/baseUrl";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchUsers = async (currentPage: number, limit: number) => {
    try {
      const response = await axios.get<User[]>(
        `${baseUrl}?_page=${currentPage}&_limit=${limit}`,
      );
      setUsers(response.data);
      const totalCount = Number(response.headers["x-total-count"]);
      setTotalPages(Math.ceil(totalCount / limit));
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

  return {
    fetchUsers,
    users,
    setUsers,
    fetchUserDetails,
    user,
    setUser,
    currentPage,
    setCurrentPage,
    limit,
    setLimit,
    totalPages,
    setTotalPages,
  };
}
