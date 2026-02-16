import { createBrowserRouter } from "react-router-dom";
import { Users, AddUser, UpdateUser, NotFound } from "./routes";

const routes = createBrowserRouter([
  { path: "/", element: <Users /> },

  // create
  { path: "/users/add", element: <AddUser /> },

  // update
  { path: "/users/update/:id", element: <UpdateUser /> },

  { path: "*", element: <NotFound /> },
]);

export default routes;
