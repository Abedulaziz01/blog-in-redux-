import { useSelector } from "react-redux";
import React from 'react'
import { selectAllPosts } from "./PostSlice";
import PostAuthore from "./PostAuthore";
import TimeAgo from "../TimeAgo";
import ReactionButtons from "./ReactionButtons";

function PostList() {
  //const posts= useSelector(state=> state.posts);
  const posts =  useSelector(selectAllPosts);

  const orderdPost= posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
  const renderPost = orderdPost.map(post =>(
         <article key ={post.id}>
             <h3>{post.title}</h3>
             <p> {post.content.substring(0,100)}</p>
             <p className="postCredit">
              <PostAuthore userid={post.userid} />
              <TimeAgo timestamp={post.date}/>
              {/* <ReactionButtons post={post}/> */}
              <ReactionButtons post={post}/>
              
             </p>
         </article> 

  ))
  return (
    <section>
        <h2>post</h2>
        {renderPost}
    </section>
  )
}

export default PostList