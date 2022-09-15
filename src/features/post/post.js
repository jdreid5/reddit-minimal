import React, { useState } from "react";
// import { getPostObject, selectLoading, selectPosts } from "./postSlice";
// import { useDispatch, useSelector } from "react-redux";
import styles from './Post.module.css';
import { Comments } from "../comments/Comments";

export const Post = (props) => {
  // const dispatch = useDispatch();
  // const posts = useSelector(selectPosts);
  // const isLoading = useSelector(selectLoading);
  const { post } = props;
  const [ display, setDisplay ] = useState({display: 'none'});

  // useEffect(() => {
  //   dispatch(getPostObject());
  // }, [dispatch])

  const handleCommentsClick = () => {
    if (display.display === 'none') {
      setDisplay({display: 'block'});
    } else {
      setDisplay({display: 'none'});
    }
  }

  // console.log(posts);

  return (
    <li key={post.id} className={styles.postLi}>
      <div className={styles.votes}>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z"/></svg></button> 
        <h5>{post.ups}</h5>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/></svg></button>
      </div>
      <div className={styles.titles}>
        <h4>{post.subreddit_name_prefixed}</h4>
        <h2>{post.title}</h2>
      </div>
      <div className={styles.media}>
        {(post.url.includes('i.redd.it')) ? <img src={post.url} alt='' className={styles.images}/> : null}

        {(!post.media) ? null :
          (post.media.reddit_video) ?
          <video preload="auto" controls className={styles.videos}>
            <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
          </video> 
          : null}

        {(post.url.includes('v.redd.it') || post.url.includes('i.redd.it')) ? null : <div className={styles.link}><a href={post.url} target="_blank" rel="noreferrer" >{post.url}</a></div>}             
      </div>
      <div className={styles.commentsBar}>
        <h3>u/{post.author}</h3>
        <h3>Posted {Math.round(((new Date().getTime()/1000) - post.created_utc)/3600)} hours ago</h3>
        <button onClick={handleCommentsClick}><h3>{post.num_comments} comments</h3></button>
      </div>
      <div style={display} className={styles.commentsArea}><Comments permalink={post.permalink} /></div>
    </li>
  )
}