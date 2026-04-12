import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/user/:id",
        element: <Dashboard />,
      },
      {
        path: "/create",
        element: <Article />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
