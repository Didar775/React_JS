import React from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import { useState } from "react";

const PostForm  = ({create}) => {

    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()

        }

        create(newPost)
        setPost({title:'', body: ''})

    }
 
    return (

        <form> 
        <MyInput value = {post.title} 
        type="text"
        onChange = {event => setPost({...post, title: event.target.value})}
         placeholder="Name of post"
       />

        <MyInput type ="text"
        value = {post.body}
        onChange = {event => setPost({...post, body: event.target.value})}
         placeholder="Content of post"/>

        <MyButton onClick = {addNewPost}>Add new post</MyButton>

        </form>

    );

}

export default PostForm;