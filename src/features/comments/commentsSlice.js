import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map((comment) => comment.data);
  }
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getComments.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
});

export default commentsSlice.reducer;
export const selectComments = (state) => state.comments.comments;
export const selectCommentsLoading = (state) => state.comments.isLoading;