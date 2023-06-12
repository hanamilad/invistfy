import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "user",
    initialState: {
        item: localStorage.getItem("item")
        ?JSON.parse( localStorage.getItem("item"))
        : [],
        List: localStorage.getItem("ItemList")
        ? JSON.parse(localStorage.getItem("ItemList"))
        : [],
    
    },
        reducers: {
            AddProdectInItemPage: (state, action) => {
                state.item = [];
                let pluscount = { ...action.payload };
                state.item.push(pluscount);
                localStorage.setItem("item",JSON.stringify(state.item));
              },
              AddItemToList:(state,action)=>{
                const redpointnav = document.querySelector(".point");
                const redpointlist = document.querySelector(".point-list");
                redpointnav.style.display = "block";
                redpointlist.style.display = "block";
                const indexitem = state.List.findIndex(
                    (Item) => Item.id === action.payload.id
                  );
                  if (indexitem >= 0) {
                    state.List[indexitem] = {
                      ...state.List[indexitem],
                    }} else {
                        let pluscount = { ...action.payload };
                        state.List.push(pluscount);
                      }
                      localStorage.setItem("ItemList",JSON.stringify(state.List));
              },
              DeletItemFromList: (state, action) => {
                const redpointnav = document.querySelector(".point");
                const redpointlist = document.querySelector(".point-list");
                redpointnav.style.display = "none";
                redpointlist.style.display = "none";
                const nextCartItems = state.List.filter(
                  (item) => item.id !== action.payload.id
                );
                state.List = nextCartItems;
                localStorage.setItem("ItemList", state.List);}
        }});
        export const {AddProdectInItemPage,AddItemToList,DeletItemFromList} = counterSlice.actions;
        export const selectoritem = (state) => state.user.item;
        export const ListItem = (state) => state.user.List;
        export default counterSlice.reducer;