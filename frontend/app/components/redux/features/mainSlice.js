import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    current_display : [],
    initial_date : "2005-02-12",
    final_date : "2020-02-12",

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
        setInitialDate: (state, action) => {
            state.initial_date = action.payload;
    },  
    setFinalDate: (state, action) => {
        state.final_date = action.payload;
    }
}

})

export const { setSearch ,setDisplay ,setInitialDate,setFinalDate } = main.actions;
export default main.reducer; 