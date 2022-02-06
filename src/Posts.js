import { Link } from "react-router-dom";


const Posts = ({ posts }) => {


    return (
        <>
            {/* <div>
                <form >
                    <input type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={event => { setSearchTerm(e.target.value) }}
                    />
                </form>
                </div> */}
            <h1> All Posts: </h1>
            <br />
            <Link to={`/NewPost`} >
                <button>Add new post
                </button>
            </Link>

            {posts.map((post) => {
                return (
                    <div className="posts-preview" key={post._id}>
                        <Link to={`/SinglePost/${post._id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <h3>{post.author.username}</h3>
                            <h4>{post.price}</h4>

                        </Link>
                        <hr></hr>
                    </div>

                )
            })}
        </>

    );
};

export default Posts;

