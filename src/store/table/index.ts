import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { RootState } from "store";
import { TransformedResult } from "features/rick-and-morty-characters/types";

interface TableState {
  selection: number[];
  characters: TransformedResult[];
  lastPage: number;
}

const initialState: TableState = {
  selection: [],
  characters: [],
  lastPage: 0,
};

export const tableSlice = createSlice({
  name: "table",
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

export const { setSelection, removeSelection, setCharacters, setAllSelections, setLastPage } =
  tableSlice.actions;

export const tableState = (state: RootState) => state.table;

const persistConfig = {
  key: "table-persist",
  storage,
  blacklist: ["characters", "lastPage"],
};

const tableReducer = persistReducer(persistConfig, tableSlice.reducer);

export default tableReducer;
