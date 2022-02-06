import { useState } from "react";
import App, { API } from "./App";
import { useHistory } from "react-router-dom";


const NewPost = ({ post }) => {
    // if (!post.length) {
    //     return <div> </div>;
    // }

    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [amount, setAmount] = useState('');
    // const [deliver, setDeliver] = useState('');

    // const history = useHistory();

    // const handleSubmit = (e) => {
    //     e.preventDefault();


    // }

    return (
        <>

            <h1> New Post</h1>

            <div className="create">

                <form onSubmit={handleSubmit}>
                    <label >Title</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    <label>Description</label>
                    <textarea
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label> Amount </label>
                    <input
                        type="text"
                        requried
                        onChange={(e) => setAmount(e.target.value)}></input>
                    <label>Will deliver</label>
                    <input
                        type="checkbox"
                        value={deliver}
                        onChange={(e) => {
                            setDeliver(e.target.checked);
                        }}></input>

                    <button> Add Post</button>

                </form>
            </div>
        </>
    );

}

export default NewPost;
