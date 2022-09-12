import React from 'react';
import styles from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from './searchbarSlice';
import { filterPostObject, getPostObject } from '../post/postSlice';

const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleOnChange = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
    if (userInput.length > 0) {
      dispatch(filterPostObject(userInput));
    }
  }

  const handleClick = () => {
    dispatch(getPostObject());
    dispatch(setSearchTerm(''));
  }

  return (
    <div>
      {(searchTerm.length > 0) ? <button className={styles.clearSearchFake} onClick={handleClick} ><img src={clearIconUrl} alt="clear search"/></button> : null}
      <input type="text" className={styles.input} onChange={handleOnChange} value={searchTerm} placeholder="Search"/>
      {(searchTerm.length > 0) ? <button className={styles.clearSearch} onClick={handleClick} ><img src={clearIconUrl} alt="clear search"/></button> : null}
    </div>
  );
}