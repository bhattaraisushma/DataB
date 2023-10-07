import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    current_display : [{
        "id": "b908b06e-ec8e-4125-b762-c4ff80f13206",
        "title": "1987-2018 cyanobacteria and water quality data for 20 reservoirs",
        "url": "https://pasteur.epa.gov/uploads/10.23719/1503175/Surface_Temperatures_standardized_FINAL.xlsx",
        "short_description": "These data include cyanobacteria cell densities (including maximum cell densities observed for each year in each reservoir), annual summer (June-August) precipitation, nutrient concentrations, and May-October surface water temperatures, deep water temperatures, and deep water dissolved oxygen concentrations. \n\nThis dataset is associated with the following publication:\nSmucker, N., J. Beaulieu, C. Nietch, and J. Young. Increasingly severe cyanobacterial blooms and deep water hypoxia coincide with warming water temperatures in reservoirs.   GLOBAL CHANGE BIOLOGY. Blackwell Publishing, Malden, MA, USA, 27(11): 2507-2519, (2021).",
        "organization_name": "epa-gov",
        "photo": "https://edg.epa.gov/EPALogo.svg"
    }],

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