import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
export const store = configureStore({
  reducer: {
    counter :counterReducer,
  },
})

// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(loggerMiddleware),
export default store ;