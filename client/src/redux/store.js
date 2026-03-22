import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice';
import authReducer from './authSlice';
import planReducer from './planSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    auth: authReducer,
    plan: planReducer,
  },
});

export default store;
