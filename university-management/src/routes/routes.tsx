import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
