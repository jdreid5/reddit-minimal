import React, { useEffect } from "react";
import { getPostObject, selectLoading, selectPosts } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from './Post.module.css';
import { Comments } from "../comments/Comments";

export const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectLoading);
  let toggle = false;

  useEffect(() => {
    dispatch(getPostObject());
  }, [dispatch])

  console.log(posts);

  const handleCommentsClick = () => {
    if (!toggle) {
      toggle = true;
    } else {
      toggle = false;
    }
  }

  return (
    <ul className={styles.postUl}>
      {
        isLoading ? <div className={styles.loading}>Loading</div> :
        posts.map((post) => (
          <li key={post.id} className={styles.postLi}>
            <div className={styles.votes}>
              <button />
              <h5>{post.ups}</h5>
              <button />
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
              <h3 onClick={handleCommentsClick}>{post.num_comments} comments</h3>
            </div>
            {toggle ? <Comments /> : null}
          </li>
        ))
      }
    </ul>
  )
}