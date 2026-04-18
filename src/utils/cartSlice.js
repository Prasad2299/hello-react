import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    items:[]
  },
  reducers:{
    addItem :(state,action) => {
      //mutating state here
      state.items.push(action.payload)
    },
    removeItem : (state) => {
      state.items.pop()
    },
    clearCart: (state) =>{
      state.items.length = 0;//[]
    }
  }
})

console.log("cartSlice",cartSlice)

//createSlice return an object where reducer ,action are there.

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name:"cart",
//   initialState:{
//     items:[]
//   },
//   reducers:{
//     addItem:(state,action) =>{
//       //mutate the  state
//       state.items.push(action.payload)
//     },
//     removeItem: (state,action) =>{
//       state.items.pop()
//     },
//     clearCart:(state,action) =>{
//       state.items.length = 0;
//     }
//   }
// })

// export const {addItem,removeItem,clearCart} = cartSlice.actions
// export default cartSlice.reducer;