import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "../../../server/controller/list";

export const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    updateList(state, action) {
      state.splice(0, state.length, ...action.payload);
    }
  }
});

export const { updateList, pushItem } = listSlice.actions;

