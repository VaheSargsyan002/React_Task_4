import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Header from "./pages/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: "/user/:id",
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/create",
    element: (
      <>
        <Header />
        <Article />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
      </>
    ),
  },
]);
