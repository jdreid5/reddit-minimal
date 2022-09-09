import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits, selectSubreddits } from "./subredditSlice";
import styles from './Subreddits.module.css';

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <ul>
        {
          subreddits.slice(0, 14).map((subreddit) => (
            <li key={subreddit.id}>
                <img className={styles.subIcon} src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`} alt={`${subreddit.display_name_prefixed}`}/>
                <a href='#'>{subreddit.display_name_prefixed}</a>
            </li>
          ))
        }
    </ul>
  )
}