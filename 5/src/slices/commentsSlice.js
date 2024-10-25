// BEGIN (write your solution here)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      state.comments = payload;
    },
    addComment(state, { payload }) {
      state.comments.push(payload);
    },
  },
});

export const { setComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
// END
