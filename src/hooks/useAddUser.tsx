import type { UserInput } from "@/types/users.type";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useAddUser() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleAddUser(values: UserInput) {
    try {
      setIsLoading(true);
      await axios.post("http://localhost:3000/users", values);
      toast.success("User added successfully!");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
    }
  }

  return { handleAddUser, isLoading };
}
