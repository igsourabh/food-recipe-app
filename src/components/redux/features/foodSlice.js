import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import foodapi from "../../api/foodapi";
import fooddetailsapi from "../../api/fooddetailsapi";

const initialstate = {
  foods: [],
  recipedetails:[],
};
export const foodSlice = createSlice({
  name: "foods",
  initialState: initialstate,
  reducers: {
    addFood: (state, {payload}) => {
      state.foods = payload;
    },
    selectedfood: (state, {payload}) => {
      state.recipedetails = payload;
    },
  },
  
});

// Action creators are generated for each case reducer function
export const { addFood,selectedfood } = foodSlice.actions;
export const allfood = (state) => state.foods.foods;
export const getalldetails = (state) => state.foods.recipedetails;
export default foodSlice.reducer;
