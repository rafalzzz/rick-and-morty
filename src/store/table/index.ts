import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { RootState } from "store";

interface TableState {
  selection: number[];
}

const initialState: TableState = {
  selection: [],
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSelection: (state, action: PayloadAction<number>) => {
      state.selection = [...state.selection, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setSelection } = tableSlice.actions;

export const tableState = (state: RootState) => state.table;

const persistConfig = {
  key: "table-persist",
  storage,
};

const tableReducer = persistReducer(persistConfig, tableSlice.reducer);

export default tableReducer;
