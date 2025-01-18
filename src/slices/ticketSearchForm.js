import { createSlice } from "@reduxjs/toolkit";

const initialState = { cityFrom: undefined, cityTo: undefined, dateStart: undefined, dateEnd: undefined };

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
