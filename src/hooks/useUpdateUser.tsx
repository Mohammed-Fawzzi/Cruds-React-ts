import type { UserInput } from "@/types/users.type";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "@/config/baseUrl";

export default function useUpdateUser(id?: string) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleUpdateUser(values: UserInput) {
    try {
      setIsLoading(true);
      await axios.put(`${baseUrl}/${id}`, values);
      toast.success("User updated successfully!");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
    }
  }

  return { handleUpdateUser, isLoading };
}
