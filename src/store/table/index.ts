import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { RootState } from "store";
import { Species } from "features/table/enums/species";

interface TableState {
  page: number;
  pageCount: number;
  name: string;
  species: Species;
}

const initialState: TableState = {
  page: 1,
  pageCount: 5,
  name: "",
  species: Species.ALL_SPECIES,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSpecies: (state, action: PayloadAction<Species>) => {
      state.species = action.payload;
    },
    nextPage: (state) => {
      state.page = state.page === state.pageCount ? state.pageCount : state.page + 1;
    },
    prevPage: (state) => {
      state.page = state.page === 1 ? 1 : state.page - 1;
    },
    setPageCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setName, setSpecies, nextPage, prevPage, setPageCount } = tableSlice.actions;

export const tableState = (state: RootState) => state.table;

const persistConfig = {
  key: "table-persist",
  storage,
};

const tableReducer = persistReducer(persistConfig, tableSlice.reducer);

export default tableReducer;
