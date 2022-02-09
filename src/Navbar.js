
import { Link } from "react-router-dom";

const Navbar = ({ user, lsToken, setToken, setUser }) => {

    if(lsToken !== null) {

    return (
        <>
        {/* logged in */}
            <div className="navbar">
                <h1>Stranger's Things</h1>
                {user && <span>Welcome {user.username}</span>}
                <Link to="/Posts">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/NewPosts">New Post</Link>
                <Link to="/Login" >Login</Link>
            </div>
            
        </>


    )

} else {
    return(
        <>
        {/* logged out */}
        <Link to="/">Home</Link>   
        <Link to="/Register" >Register</Link>
        <Link to="/Posts"
        onClick={() => {
            setToken("");
            setUser(null);
            localStorage.removeItem("token");
        }}> Log Out
        </Link>
        </>
    )
};
};

export default Navbar;