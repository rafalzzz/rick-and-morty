import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import tableReducer from "store/table";
import { rickAndMortyApi } from "features/rick-and-morty-characters/api";

const rootReducer = combineReducers({
  table: tableReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export const setupStore = (preloadedState: Record<string, any>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(rickAndMortyApi.middleware),
  });

export const store = setupStore({});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
