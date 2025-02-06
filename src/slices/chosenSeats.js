import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrival_coach_class_type: undefined,
  arrival_ticket_quantity: { adults: 0, babies: 0, children: 0 },
  departure_coach_class_type: undefined,
  departure_ticket_quantity: { adults: 0, babies: 0, children: 0 },
};

const chosenSeatsSlice = createSlice({
  name: "chosenSeats",
  initialState,
  reducers: {
    changeChosenSeats: (state, action) => {
      console.log(action.payload);

      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const selectChosenSeats = state => state.chosenSeats;
export const { changeChosenSeats } = chosenSeatsSlice.actions;
export default chosenSeatsSlice.reducer;
