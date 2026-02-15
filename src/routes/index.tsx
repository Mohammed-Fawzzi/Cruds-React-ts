import { createBrowserRouter } from "react-router-dom";
import { Users, UserDetails, AddUser, UpdateUser, NotFound } from "./routes";

const routes = createBrowserRouter([
  { path: "/", element: <Users /> },

  // details
  { path: "/users/:id", element: <UserDetails /> },

  // create
  { path: "/users/add", element: <AddUser /> },

  // update
  { path: "/users/update/:id", element: <UpdateUser /> },

  { path: "*", element: <NotFound /> },
]);

export default routes;
