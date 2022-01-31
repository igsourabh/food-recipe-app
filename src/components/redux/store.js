import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './features/foodSlice'
export default configureStore({
  reducer: {
      foods: foodReducer
  },
})