import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/ProductData";
export const shopingcart= createSlice({
    name:'shop',
    initialState:{
        productData,
        cartItem:[]
    },
    reducers:{
        toggleset:(state,action)=>{
            let id=action.payload.index
            let data=action.payload.data
            let e=action.payload.e
            console.log(!data[id],e)
            const existingItem=state.cartItem.find(item=>item.id==e.id);
            if(!existingItem){
                state.cartItem.push({...e,quantity:1})
            }
        },
         removedata:(state,action)=>{
            let e=action.payload.data
            console.log(action)
            state.cartItem = state.cartItem.filter(item => item.id !== e.id);
        },
        totalamounts:(state,action)=>{
                let value=action.payload.data
                let i=action.payload.i
               state.cartItem=state.cartItem.map((data,index)=>{
                console.log(data,index)
                if(index==i){
                    data.quantity=value
                }
                return data
               })
        }
  
}
})

export const {toggleset,removedata,totalamounts}=shopingcart.actions
export default shopingcart.reducer