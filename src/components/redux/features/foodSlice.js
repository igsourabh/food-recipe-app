import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  foods: [],
};
export const foodSlice = createSlice({
  name: "foods",
  initialState: initialstate,
  reducers: {
    addFood: (state, action) => {
      state.foods = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFood } = foodSlice.actions;
export const allfood=(state)=>state.foods.foods
export default foodSlice.reducer;
