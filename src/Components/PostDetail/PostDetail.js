import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setpost] = useState({});
    const [Comments, setComments] = useState([]);


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setpost(data))
    },[id])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])

    return (
        <div>
            <h3>This is post detail {id}</h3>
            <p>User posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Post body: {post.body}</p>
            <p>Number of Comments: {Comments.length}</p>
            {
                Comments.map(comment => <Comment comment = {comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;