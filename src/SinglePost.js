import { useParams } from "react-router-dom";

const SinglePost = ({ posts }) => {
    if (!posts.length) {
        return <div> </div>;
    }

    const { id } = useParams();
    const post = posts.find((post) => id === post._id);

    return (
        <>
            <div className="post-preview" key={post._id}>
                <h2>{post.title}</h2>
                <p>About: {post.description}</p>
                <h4>Seller: {post.author.username}</h4>
                <h4>Location: {post.location}</h4>
                <h4>Price: {post.price}</h4>
            </div>
        </>
    );
};

export default SinglePost;
