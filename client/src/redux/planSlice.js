import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPlan: localStorage.getItem('selectedPlan') || null,
  planId: localStorage.getItem('planId') || null,
  price: localStorage.getItem('planPrice') || 0,
};

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload.name;
      state.planId = action.payload.planId;
      state.price = action.payload.price;
      localStorage.setItem('selectedPlan', action.payload.name);
      localStorage.setItem('planId', action.payload.planId);
      localStorage.setItem('planPrice', action.payload.price);
    },
    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
      state.planId = null;
      state.price = 0;
      localStorage.removeItem('selectedPlan');
      localStorage.removeItem('planId');
      localStorage.removeItem('planPrice');
    },
  },
});

export const { setSelectedPlan, clearSelectedPlan } = planSlice.actions;

export const selectSelectedPlan = (state) => state.plan.selectedPlan;
export const selectPlanPrice = (state) => state.plan.price;
export const selectPlanId = (state) => state.plan.planId;

export default planSlice.reducer;
