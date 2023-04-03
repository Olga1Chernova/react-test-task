import { configureStore } from "@reduxjs/toolkit";
import {persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist";

import persistedReducer from "./root-reducer.js";

export const store = configureStore({
    reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);