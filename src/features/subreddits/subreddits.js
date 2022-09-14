import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits, selectSubreddits } from "./subredditSlice";
import { getSubredditPosts } from "../post/postSlice";
import styles from './Subreddits.module.css';

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <ul className={styles.subUl}>
        {
          subreddits.slice(0, 14).map((subreddit) => (
            <li key={subreddit.id} className={styles.subLi}>
                <img className={styles.subIcon} src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`} alt={`${subreddit.display_name_prefixed}`}/>
                <button onClick={() => dispatch(getSubredditPosts(subreddit.display_name))}>{subreddit.display_name_prefixed}</button>
                {console.log(subreddit.display_name)}
            </li>
          ))
        }
    </ul>
  )
}