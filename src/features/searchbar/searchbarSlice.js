import { createSlice } from "@reduxjs/toolkit";

export const searchbarSlice = createSlice({
  name: 'Searchbar',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      return state = action.payload;
    }
  }
});

export default searchbarSlice.reducer;
export const selectSearchTerm = (state) => state.searchbar;
export const { setSearchTerm } = searchbarSlice.actions;