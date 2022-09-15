import React, { useEffect } from 'react';
import styles from './ResultsContainer.module.css';
import { Post } from '../../features/post/Post';
import { getPostObject, selectLoading, selectPosts } from "../../features/post/postSlice";
import { useDispatch, useSelector } from "react-redux";

export const ResultsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getPostObject());
  }, [dispatch])

  return (
    <div className={styles.resultsContainer}>
      <ul className={styles.postUl}>
        {
          isLoading ? <div className={styles.loading}>Loading</div> :
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }
      </ul>
    </div>
  );
}