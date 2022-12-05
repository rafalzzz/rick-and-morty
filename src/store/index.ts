import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import rickAndMortyCharactersReducer from "store/rick-and-morty-characters";
import { rickAndMortyApi } from "features/rick-and-morty-characters/api";

const rootReducer = combineReducers({
  rickAndMortyCharacters: rickAndMortyCharactersReducer,
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
