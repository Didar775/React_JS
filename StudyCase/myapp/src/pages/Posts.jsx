import React from "react";
import './styles/App.css' 
import Postlist from "./components/Postlist"
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/Select/MySelect";

const Posts = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript 2", body : "Description"},
        {id: 1, title: "Javascript 2", body : "Description"},
        {id: 1, title: "Javascript 2", body : "Description"},
      ])
    
      const createPost = (newPost) => {
        setPosts([...posts,newPost])
      }
    
      const removePost = (post) => {
    
        setPosts(posts.filter(p => p.id !== post.id))
        
      }
    
     
      return (
        <div className="App">   
          <PostForm create = {createPost} /> 
          <hr style={{margin: '15px 0'}}></hr>
          <div>
           <MySelect
              defaultValue="Sort"
              options={[
                {value: 'title', name: 'By name'},
                {value: 'body', name :'By content'}
                
              ]}
           />
          </div>
          {posts.length
            ? 
            <Postlist remove = {removePost} posts = {posts} title = "List of posts"/>
            :
            <h1 style={{textAlign : "center"}}>Not Found Post</h1>
    
          }
        </div>
      );

}

export default Posts;
