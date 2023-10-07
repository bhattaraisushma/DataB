import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    search: "",
}

export const main = createSlice({
    name: "main",
    initialState: initialState,

    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },  

})

export const { setSearch } = main.actions;
export default main.reducer; 