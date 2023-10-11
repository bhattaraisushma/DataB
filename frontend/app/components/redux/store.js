import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./features/mainSlice";
import yearReducer from "./features/yearSlice";
import api from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    year: yearReducer,
    apiReducer : api.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
