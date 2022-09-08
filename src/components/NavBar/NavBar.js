import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../../features/searchbar/SearchBar';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={styles.navbar} >
      <Link to="/home">
        <button>X</button>
      </Link>
      <div>
        <SearchBar />
      </div>
      <div>
      </div>
    </div>
  );
}