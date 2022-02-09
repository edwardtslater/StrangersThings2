import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./App"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${ API }/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            }),
        });

        if (response) {
            const data = await response.json();
            const token = data.data.token;
            setToken;
            localStorage.setItem("token", token);
            setUsername("");
            setPassword("");
        }

        setUsername("");
        setPassword("");
        history.push("/profile");
    };
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    placeholder="Enter Username"
                    onChange={(event) => setUsername(event.target.value)}
                ></input>
                <label>Password</label>
                <input
                    type="text"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(event) => setPassword(event.target.value)}
                ></input>
                <button >Login</button>
            </form>
        </div>
    );
};

export default Login;