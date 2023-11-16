import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
    const { user, token, setUser, setToken, notification } = useStateContext();

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (e) => {
        e.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/users" style={{ fontWeight: "bold" }}>
                    Users
                </Link>
            </aside>
            <div className="content">
                <header className="dashboard">
                    <div style={{ fontWeight: "bold" }}>Dashboard </div>
                    <div style={{ fontWeight: "bold" }}>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">
                            Logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>

            {notification && <div className="notification">{notification}</div>}
        </div>
    );
}
