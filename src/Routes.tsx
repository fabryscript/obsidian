import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editor from "./components/editor/Editor";
import ViewDispatcher from "./ViewDispatcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewDispatcher />
  },
  {
    path: "/edit",
    element: <Editor />
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes