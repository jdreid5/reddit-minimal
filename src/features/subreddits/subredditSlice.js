import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSubreddits = createAsyncThunk(
  'subreddits/getSubreddits',
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
)

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddits: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubreddits.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getSubreddits.fulfilled, (state, action) => {
        state.subreddits = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getSubreddits.rejected, (state) => {
        state.subreddits = "Failed to fetch subreddits!";
        state.isLoading = false;
        state.hasError = true;
      })
  }
});

export const selectSubreddits = (state) => state.subreddit.subreddits;
export default subredditSlice.reducer;