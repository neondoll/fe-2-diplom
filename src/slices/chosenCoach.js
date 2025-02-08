import { createSlice } from "@reduxjs/toolkit";

const initialState = { arrival: undefined, departure: undefined };

const chosenCoachSlice = createSlice({
  name: "chosenCoach",
  initialState,
  reducers: {
    clearChosenCoach: (state) => {
      Object.entries(initialState).forEach(([name, value]) => {
        state[name] = value;
      });
    },
    initChosenCoach: (state, action) => {
      Object.entries(action.payload).forEach(([name, value]) => {
        state[name] = value;
      });
    },
  },
});

export const selectChosenCoach = state => state.chosenCoach;
export const { clearChosenCoach, initChosenCoach } = chosenCoachSlice.actions;
export default chosenCoachSlice.reducer;
