import { createSlice } from "@reduxjs/toolkit";

const initialState = { date_end: undefined, date_start: undefined, from_city: undefined, to_city: undefined };

const routesSearchSlice = createSlice({
  name: "routesSearchForm",
  initialState,
  reducers: {
    changeRoutesSearchInput: (state, action) => {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const selectRoutesSearch = state => state.routesSearch;
export const { changeRoutesSearchInput } = routesSearchSlice.actions;
export default routesSearchSlice.reducer;
