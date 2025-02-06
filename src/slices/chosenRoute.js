import { createSlice } from "@reduxjs/toolkit";

const initialState = { arrival: undefined, departure: undefined };

const chosenRouteSlice = createSlice({
  name: "chosenRoute",
  initialState,
  reducers: {
    clearChosenRoute: (state) => {
      Object.entries(initialState).forEach(([name, value]) => {
        state[name] = value;
      });
    },
    initChosenRoute: (state, action) => {
      console.log(action.payload);

      Object.entries(action.payload).forEach(([name, value]) => {
        state[name] = value;
      });
    },
  },
});

export const selectChosenRoute = state => state.chosenRoute;
export const { clearChosenRoute, initChosenRoute } = chosenRouteSlice.actions;
export default chosenRouteSlice.reducer;
