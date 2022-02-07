import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Posttable from './Posttable';

function HttpDemo() {

    const url ='https://jsonplaceholder.typicode.com/posts';
    const[posts, setPosts] = useState([]);

   useEffect( async() => 
   {
        const {data:alldetails} = await axios.get(url);
        setPosts(alldetails);
    },[]);
    
        const addpost = async() =>
    {
        const obj = { title: 'foo',
        body: 'bar',
        userId: 1,};
        
        const {data:postingdata} = await axios.post(url,obj);
        const newpost = [postingdata,...posts]
        console.log(newpost);
        setPosts(newpost);
    }
        const updatehandler = async(post) =>
    {
        
        post.title="jai";
        const {data:updatedpost} = await axios.put(url + "/" +post.id,post);
        const newlist = posts.map(post => {
            if(post.id === updatedpost.id)
            {
                post = updatedpost;
            }
            return post;
        });
        setPosts(newlist);
        console.log(updatedpost);
    }
        const deletehandler = async(post) =>
        {
            await axios.delete(url + "/" +post.id,post);
            const newlist = posts.filter(p => p.id !== post.id);
            setPosts(newlist);
        }
    return (
        <div>
            <button className="btn btn-primary" onClick={addpost}>Add post</button> <h3>{posts.length}</h3>
            <Posttable posts={posts} updateposts={updatehandler} deleteposts={deletehandler}></Posttable>
        </div>
    )
}

export default HttpDemo
