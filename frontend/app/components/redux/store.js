import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./features/mainSlice";
import yearReducer from "./features/yearSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    year: yearReducer,
  },
});
