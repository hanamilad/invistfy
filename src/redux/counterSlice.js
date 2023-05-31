import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "user",
    initialState: {
        item: localStorage.getItem("item")
        ?JSON.parse( localStorage.getItem("item"))
        : [],
    
    },
        reducers: {
            AddProdectInItemPage: (state, action) => {
                state.item = [];
                let pluscount = { ...action.payload };
                state.item.push(pluscount);
                localStorage.setItem("item",JSON.stringify(state.item));
              },
        }});
        export const {AddProdectInItemPage} = counterSlice.actions;
        export const selectoritem = (state) => state.user.item;
        export default counterSlice.reducer;