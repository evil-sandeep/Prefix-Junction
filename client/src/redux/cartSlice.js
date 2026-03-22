import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.productId === newItem.productId);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          productId: newItem.productId,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.productId === id);
      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.productId !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.productId === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.productId !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;

// Selector
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;
export const selectCartTotalAmount = (state) => 
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
