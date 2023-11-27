import axios from "axios"
import { useEffect,useState } from "react";
const client=axios.create({
    baseURL:""
})
export default function AxiosComponent(){
   
   const [posts,setPosts]=useState([]);
   useEffect(()=>{
    client.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        setPosts(response.data);
    })
   },[]);
   return (
    <div className="app">
    <h2>Get all  from api</h2>
    {posts.map((post) => {
       return (
          <div className="post-card" key={post.id}>
             <h2 className="post-title">{post.name}</h2>
             <p className="post-body">{post.username}</p>
           
          </div>
       );
    })}
  </div>
);
   
};


    // axios 
    // .get('https://jsonplaceholder.typicode.com/users')
    // .then((response)=>{
    //     console.log("get response:" ,response.data)
    // })
    // .catch((error)=>{
    //     console.log("get eror:",error.message? error.message:error)

    // })
    // return <div>axios</div>

