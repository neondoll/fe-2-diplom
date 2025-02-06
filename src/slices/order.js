import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrival: { route_direction_id: undefined, seats: [] },
  arrival_coach_id: null,
  arrival_options: { linens: 0, wifi: 0 },
  arrival_passengers: [],
  arrival_seats: [],
  departure: { route_direction_id: undefined, seats: [] },
  departure_coach_id: null,
  departure_options: { linens: 0, wifi: 0 },
  departure_passengers: [],
  departure_seats: [],
  user: { email: "", first_name: "", last_name: "", patronymic: "", payment_method: null, phone: "" },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changeOrder: (state, action) => {
      console.log(action.payload);

      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const selectOrder = state => state.order;
export const { changeOrder } = orderSlice.actions;
export default orderSlice.reducer;
