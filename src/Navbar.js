
import { Link } from "react-router-dom";

const Navbar = ({ user, lsToken, setToken, setUser }) => {



    return (
        <>
            <div className="navbar">
                <h1>Stranger's Things</h1>

                <Link to="/Posts">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/NewPosts">New Post</Link>

                {/* <div>
                    {isLoggedIn
                        ? <LogoutButton onClick={this.handleLogoutClick} />
                        : <LoginButton onClick={this.handleLoginClick} />
                    }
                </div> */}


                <Link to="/Login" >Login</Link>
                <Link to="/Register" >Register</Link>
                <Link to="/Posts"
                    onClick={() => {
                        setToken("");
                        setUser(null);
                        localStorage.removeItem("token");
                    }}> Log Out
                </Link>
            </div>
            {user && <span>Welcome {user.username}</span>}
        </>


    )

}

export default Navbar;