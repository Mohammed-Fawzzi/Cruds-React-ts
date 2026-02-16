import { lazy } from "react";

export const Users = lazy(() => import("../pages/Users"));
export const AddUser = lazy(() => import("../pages/AddUser"));
export const UpdateUser = lazy(() => import("../pages/UpdateUser"));
export const NotFound = lazy(() => import("../pages/NotFound"));
