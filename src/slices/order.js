import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrival: { route_direction_id: undefined, seats: [] },
  departure: { route_direction_id: undefined, seats: [] },
  user: { email: "", first_name: "", last_name: "", patronymic: "", payment_method: null, phone: "" },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changeOrder: (state, action) => {
      const { name, value } = action.payload;

      state[name] = value;
    },
    clearOrder: (state) => {
      Object.entries(initialState).forEach(([name, value]) => {
        state[name] = value;
      });
    },
  },
});

export const selectOrder = state => state.order;
export const { changeOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
