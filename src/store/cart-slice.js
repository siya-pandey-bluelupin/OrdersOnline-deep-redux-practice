import { createSlice } from "@reduxjs/toolkit";

const initialCartState={
    items:[],
    totalQuantity:0,
    showCart:true
}

const cartSlice=createSlice({
name:'cart',
initialState:initialCartState,
reducers:{

    addItem(state,action){
        console.log('inside add item')
        const newItem=action.payload;
        console.log("new item is : ", newItem)
        const existingItem=state.items.find((item)=>item.id===newItem.id);
        state.totalQuantity++;
        if (!existingItem){
            console.log('item exists')
            state.items.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                title:newItem.title
            });
        }
        else {
            console.log('item not exist')
            existingItem.quantity++;
            existingItem.totalPrice+=newItem.price;
        }
    },
removeItemFromCart(state,action){
    const id=action.payload;
    const existingItem=state.items.find(item=>item.id===id);
    state.totalQuantity--;
    if (existingItem.quantity===1){
state.items=state.items.filter(item=>item.id!==id);
    }else{
        existingItem.quantity--;
        existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
    }
}
,

    toggleCart(state){
        state.showCart=!state.showCart;
    },

   

}
});

export const cartActions=cartSlice.actions;
export default cartSlice.reducer;
