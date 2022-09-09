import React, { useEffect } from "react";
import { getPostObject, selectPosts } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";

export const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPostObject());
  }, [dispatch])

  console.log(posts);

  return (
    <ul>
      {
        posts.map((post) => (
          <li key={post.id}>
            <div>
              <img alt='' />
              <h5>{post.ups}</h5>
              <img alt='' />
            </div>
            <h2>{post.title}</h2>
            <h4>{post.subreddit_name_prefixed}</h4>
            <div>
              <img src={post.url} alt='' />

              {(!post.media) ? null :
                (post.media.reddit_video) ?
                <video preload="auto" controls muted >
                  <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
                </video> 
                : null}

              {(post.url.includes('v.redd.it') || post.url.includes('i.redd.it')) ? null : <span><a href={post.url} target="_blank" rel="noreferrer" >{post.url}</a></span>}             
            </div>
            <div>
              <h3>{post.author}</h3>
              <h3>Posted {Math.round(((new Date().getTime()/1000) - post.created_utc)/3600)} hours ago</h3>
              <h3>{post.num_comments} comments</h3>
            </div>
          </li>
        ))
      }
    </ul>
  )
}