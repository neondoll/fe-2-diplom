import { createSlice } from "@reduxjs/toolkit";

const initialState = { from_city: undefined, to_city: undefined, dateStart: undefined, dateEnd: undefined };

const routesSearchFormSlice = createSlice({
  name: "routesSearchForm",
  initialState,
  reducers: {
    changeRoutesSearchFormInput: (state, action) => {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const selectRoutesSearchForm = state => state.routesSearchForm;
export const { changeRoutesSearchFormInput } = routesSearchFormSlice.actions;
export default routesSearchFormSlice.reducer;
