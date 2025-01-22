import { createSlice } from "@reduxjs/toolkit";

const initialState = { from_city: undefined, to_city: undefined, dateStart: undefined, dateEnd: undefined };

const ticketSearchFormSlice = createSlice({
  name: "ticketSearchForm",
  initialState,
  reducers: {
    changeTicketSearchFormInput: (state, action) => {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export const selectTicketSearchForm = state => state.ticketSearchForm;
export const { changeTicketSearchFormInput } = ticketSearchFormSlice.actions;
export default ticketSearchFormSlice.reducer;
