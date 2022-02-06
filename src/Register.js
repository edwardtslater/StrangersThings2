import { useState, Link } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./App";



const Register = ({ setToken }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const history = useHistory()

    const handleRegister = async (e) => {

        e.preventDefault();
        setError("")
        if (password !== confirm) {

            setError("Confrim password does not match password")
            return;
        }

        const resp = await fetch(`${API}/users/register`, {
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
        const info = await resp.json();
        if (info.error) {
            return setError(info.error.message);

        }

        setToken(info.data.token);
        localStorage.setItem("token", info.data.token);
        history.push("/profile")
    };

    return (
        <>
            <div className="create ">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <input
                        required
                        placeholder="Enter Username .."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <br />
                    <input
                        required
                        placeholder="Enter password .."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <input
                        required
                        placeholder="Confirm password .."
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <br />

                    <button>Submit</button>
                    <p>{error}</p>
                </form>

                {/* <div>
                    <Link to={'/login'}> Already have an account? Click here to log in!</Link>
                </div> */}

            </div>


        </>
    )
}

export default Register;


