import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrival_seats: [],
  arrival_ticket_quantity: { adults: 2, children: 0, children_without_seat: 0 },
  arrival_wagon_number: undefined,
  arrival_wagon_type: undefined,
  departure_seats: [],
  departure_ticket_quantity: { adults: 2, children: 1, children_without_seat: 0 },
  departure_wagon_number: "02",
  departure_wagon_type: "first",
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
