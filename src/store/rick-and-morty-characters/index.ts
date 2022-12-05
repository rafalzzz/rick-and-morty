import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { RootState } from "store";
import { TransformedResult } from "features/rick-and-morty-characters/types";

interface rickAndMortyCharactersState {
  selection: number[];
  isLoading: boolean;
  characters: TransformedResult[];
  lastPage: number;
}

const initialState: rickAndMortyCharactersState = {
  selection: [],
  isLoading: false,
  characters: [],
  lastPage: 0,
};

export const rickAndMortyCharacters = createSlice({
  name: "rick-and-morty-characters",
  initialState,
  reducers: {
    setSelection: (state, action: PayloadAction<number>) => {
      state.selection = [...state.selection, action.payload];
    },
    removeSelection: (state, action: PayloadAction<number>) => {
      state.selection = state.selection.filter((id) => id !== action.payload);
    },
    setAllSelections: (state, action: PayloadAction<number[]>) => {
      state.selection = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCharacters: (state, action: PayloadAction<TransformedResult[] | undefined>) => {
      state.characters = action.payload ?? [];
    },
    setLastPage: (state, action: PayloadAction<number>) => {
      state.lastPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  setSelection,
  removeSelection,
  setAllSelections,
  setIsLoading,
  setCharacters,
  setLastPage,
} = rickAndMortyCharacters.actions;

export const rickAndMortyCharactersState = (state: RootState) => state.rickAndMortyCharacters;

const persistConfig = {
  key: "rick-and-morty-characters",
  storage,
  blacklist: ["characters", "lastPage"],
};

const rickAndMortyCharactersReducer = persistReducer(persistConfig, rickAndMortyCharacters.reducer);

export default rickAndMortyCharactersReducer;
