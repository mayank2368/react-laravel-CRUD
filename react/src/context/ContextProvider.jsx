import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John",
    });
    const [token, _setToken] = useState(null);

    const setToken = (newToken) => {
        _setToken(newToken);
        if (newToken) {
            localStorage.setItem("ACCESS_TOKEN", newToken);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const UseStateContext = () => useContext(StateContext);
