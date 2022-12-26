import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditExistingFile from "./actions/EditExistingFile";
import ViewDispatcher from "./ViewDispatcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewDispatcher />
  },
  {
    path: "/edit",
    element: <EditExistingFile />
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes