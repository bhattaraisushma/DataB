import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    current_display : [],

}

export const main = createSlice({
    name: "main",
    
    initialState,

    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setDisplay: (state, action) => {
            state.current_display = action.payload;
        },
    },  

})

export const { setSearch ,setDisplay } = main.actions;
export default main.reducer; 