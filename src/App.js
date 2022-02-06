import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Register from "./Register";
import Navbar from "./Navbar";
import "./index.css";
import SinglePost from "./SinglePost";
import NewPost from "./NewPost";
import Login from "./Login";
import Profile from "./Profile";




export const API = 'https://strangers-things.herokuapp.com/api/2110-ftb-et-web-pt';


const App = () => {

    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);


    // fetch all posts
    async function fetchPosts() {
        const response = await fetch(`${API}/posts`);
        const info = await response.json();
        setPosts(info.data.posts);

    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${API}/posts`,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
            const info = await response.json();
            console.log(info);
        } catch (error) {
            console.error(error);
        }
    };


    //delete post
    const handleDelete = async (POST_ID) => {
        try {
            const response = await fetch(`${API}/posts/${POST_ID}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer `${lsToken}`",
                    },
                });
            const info = await response.json();
            console.log(info);
        } catch (error) {
            console.error(error);
        }
    };
    //fetch user and token storage

    console.log(user);

    const fetchUser = async () => {
        const lsToken = localStorage.getItem("token")
        if (lsToken) {
            setToken(lsToken);

        }
        const resp = await fetch(`${API}/user/me`, {
            headers: {
                Authorization: `Bearer ${lsToken}`
            },
        });
        const info = await resp.json();
        if (info.succes) {
            setUser(info.data)
        }
    };

    useEffect(() => {
        fetchUser();
        fetchPosts();
    }, [token]);






    // display
    return (
        <>

            <div className="App">
                <Navbar user={user} setToken={setToken} setUser={setUser} />

                <div className="content">
                    <Route exact path="/">
                        <Home
                            posts={posts}
                            user={user}
                            setToken={setToken}
                            setUser={setUser}
                        />
                    </Route>

                    <Route exact path="/SinglePost/:id">
                        <SinglePost posts={posts} />
                    </Route>

                    <Route exact path="/NewPost/:id">
                        <NewPost posts={posts} />
                    </Route>
                    <Route exact path="/Profile/">
                        <Profile
                            user={user}
                            token={token}
                            setUser={setUser}
                            setToken={setToken} />
                    </Route>

                    <Route exact path="/posts">
                        <Posts posts={posts} />
                    </Route>

                    <Route exact path="/Login">
                        <Login setToken={setToken} setUser={setUser} />
                    </Route>
                    <Route exact path="/register">
                        <Register setToken={setToken} setUser={setUser} />
                    </Route>

                </div>

            </div>
        </>
    )
}

export default App;