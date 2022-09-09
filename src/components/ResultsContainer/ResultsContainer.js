import React from 'react';
import styles from './ResultsContainer.module.css';
import { Post } from '../../features/post/Post';

export const ResultsContainer = () => {
  return (
    <div className={styles.resultsContainer}>
      <Post />
    </div>
  );
}