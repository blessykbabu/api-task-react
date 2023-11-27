import axios from "axios"
import { useEffect,useState } from "react";
const client=axios.create({
    
})
export default function AxiosComponent(){
   
   const [posts,setPosts]=useState([]);
   useEffect(()=>{
    client.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
        setPosts(response.data);
    })
   },[]);
   return (
    <div className="app">
    <h2>Get all  data from api</h2>
    {posts.map((post) => {
       return (
         <div className="design">
          <div className="refer" key={post.id}>
           <p className="name">Name : {post.name}</p>
             <p className="body">Email : {post.email}</p>
             <p className="body"> Comment : {post.body}</p>
            
           </div>
          </div>
       );
    })}
  </div>
);
   
};


