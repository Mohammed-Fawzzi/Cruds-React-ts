import axios from "axios";
import baseUrl from "@/config/baseUrl";

export default function useDeleteUser() {
  const deleteUser = async (id: string) => {
    return await axios.delete(`${baseUrl}/${id}`);
  };
  return { deleteUser };
}
