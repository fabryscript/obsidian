import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditExistingFile from "./actions/EditExistingFile";
import EditNewFile from "./actions/EditNewFile";
import ViewDispatcher from "./ViewDispatcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewDispatcher />
  },
  {
    path: "/edit",
    element: <EditExistingFile />
  },
  {
    path: "/new",
    element: <EditNewFile />
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes