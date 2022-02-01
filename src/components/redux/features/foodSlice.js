import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import foodapi from "../../api/foodapi";
import fooddetailsapi from "../../api/fooddetailsapi";
export const fetchasyncrecipe = createAsyncThunk(
  "recipe/fetchasyncrecipe",
  async () => {
    const recipename="cake"
    const response = await foodapi.get(
      `api/recipes/v2?type=public&q=${recipename}&beta=false&app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672`
    );return response.data.hits
  }
);

export const fetchasyncrecipedetails = createAsyncThunk(
  "recipe/fetchasyncrecipedetails",
  async (id) => {
    const response = await foodapi.get(
      `api/recipes/v2/${id}?app_id=780ef115&app_key=
      886f8ff08f4765cb080898dfdaa81672&type=public`
    );return response.data
  }
);
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
  },
  extraReducers: {
    [fetchasyncrecipe.pending]: () => {
      console.log("pending");
    },
    [fetchasyncrecipe.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, foods: payload };
    },
    [fetchasyncrecipe.rejected]: () => {
      console.log("rejected");
    },
    [fetchasyncrecipedetails.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, recipedetails: payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFood } = foodSlice.actions;
export const allfood = (state) => state.foods.foods;
export const getalldetails = (state) => state.foods.recipedetails;
export default foodSlice.reducer;
