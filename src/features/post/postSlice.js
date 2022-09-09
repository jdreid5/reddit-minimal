import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostObject = createAsyncThunk(
  'post/getPostObject',
  async () => {
    const response = await fetch('https://www.reddit.com/r/all.json');
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
)

export const postSlice = createSlice({
  name: 'Post',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostObject.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPostObject.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getPostObject.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
});

export const selectPosts = (state) => state.post.posts;
export default postSlice.reducer;