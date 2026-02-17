import axios from "axios";

export default function useDeleteUser() {
  const deleteUser = async (id: number) => {
    return await axios.delete(`http://localhost:3000/users/${id}`);
  };
  return { deleteUser };
}
