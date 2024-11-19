// import { createSlice } from '@reduxjs/toolkit'
// export const productSlice = createSlice({
//   name: 'product',
//   initialState: {
//       cartItem: []
//     // cartItem:localStorage.getItem("cart")?  JSON.parse(localStorage.getItem("cart")) :[],
//     },
//     reducers: {
//       addToCart:(state , action) => {
//       console.log(action.payload);
//       let fineProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)
//       if(fineProduct !== -1){
//       state.cartItem[fineProduct].qun += 1
//      localStorage.setItem("cart", JSON.stringify(state.cartItem))
//       }else{
//         state.cartItem = [...state.cartItem , action.payload]
//         localStorage.setItem("cart", JSON.stringify(state.cartItem))
//       }
  
//       },
     
//      productIncrement : (state, action)=>{
//       state.cartItem[action.payload].qun += 1
//      },
//      handleDecrement : (state, action)=>{
//       state.cartItem[action.payload].qun -= 1
//      }
//     }
//   })
  
//   export const { addToCart, productIncrement, handleDecrement} = productSlice.actions
  
//   export default productSlice.reducer