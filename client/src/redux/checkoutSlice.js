import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: {
    fullName: '',
    email: '',
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: '',
  },
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setAddress(state, action) {
      state.address = { ...state.address, ...action.payload };
    },
    clearAddress(state) {
      state.address = initialState.address;
    },
  },
});

export const { setAddress, clearAddress } = checkoutSlice.actions;

// Selector
export const selectCheckoutAddress = (state) => state.checkout.address;

export default checkoutSlice.reducer;
