import React from 'react';
import styles from './AsideContainer.module.css';
import { Subreddits } from '../../features/subreddits/Subreddits';

export const AsideContainer = () => {
  return (
    <div className={styles.asideContainer}>
      <h1>Subreddits</h1>
      <Subreddits />
    </div>
  );
}