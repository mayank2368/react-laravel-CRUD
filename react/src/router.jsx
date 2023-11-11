import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Users from "./pages/users";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        parth: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
    {
        parth: "guestlayout",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
