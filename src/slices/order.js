import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrival_coach_class_type: null,
  arrival_coach_id: null,
  arrival_seats: [],
  arrival_ticket_quantity: { adults: 0, children: 0, babies: 0 },
  departure_coach_class_type: null,
  departure_coach_id: null,
  departure_seats: [],
  departure_ticket_quantity: { adults: 0, children: 0, babies: 0 },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changeOrder: (state, action) => {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const selectOrder = state => state.order;
export const { changeOrder } = orderSlice.actions;
export default orderSlice.reducer;
