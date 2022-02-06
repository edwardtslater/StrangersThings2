import { Link } from "react-router-dom";





const Home = ({ user }) => {

    if (!user) {
        return <div> <Link to={`/Post`}></Link></div>;
    }

    return (
        <>

            <div className="content">
                <h1>Items for sale</h1>

            </div>
        </>
    );
}

export default Home;
