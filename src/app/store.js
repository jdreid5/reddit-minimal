import { configureStore } from '@reduxjs/toolkit';
import searchbarReducer from '../features/searchbar/searchbarSlice';
import postReducer from '../features/post/postSlice';
import subredditReducer from '../features/subreddits/subredditSlice';

export const store = configureStore({
  reducer: {
    searchbar: searchbarReducer,
    post: postReducer,
    subreddit: subredditReducer,
  },
});
