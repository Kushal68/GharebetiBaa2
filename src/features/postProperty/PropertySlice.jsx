import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  layout: null,
  location: null,
  details: null,
  amenities: null,
  price: null,
  social: null,
  isLoading: false,
};

const propertySlice = createSlice({
  name: 'propertymap',
  initialState,
  reducers: {
    saveLayout: {
      reducer(state, action) {
        state.layout = action.payload;
      },
    },
    saveLocation: {
      reducer(state, action) {
        state.location = action.payload;
      },
    },
    saveDetails: {
      reducer(state, action) {
        state.details = action.payload;
      },
    },
    saveAmenities: {
      reducer(state, action) {
        state.amenities = action.payload;
      },
    },
    savePrice: {
      reducer(state, action) {
        state.price = action.payload;
      },
    },
    saveSocial: {
      reducer(state, action) {
        state.social = action.payload;
      },
    },
    resetPropertyState: (state) => {
      // Reset state back to initial values
      return initialState;
    },
  },
});

export const {
  saveLayout,
  saveLocation,
  saveDetails,
  saveAmenities,
  savePrice,
  saveSocial,
  resetPropertyState,
} = propertySlice.actions;
export default propertySlice.reducer;
// resetPropertyState: (state) => {
//     // Reset state back to initial values
//     return initialState;
//   },
