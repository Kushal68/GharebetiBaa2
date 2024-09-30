import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomData: null,
  isLoading: false,
};

const postSlice = createSlice({
  name: 'postmap',
  initialState,
  reducers: {
    saveRoom: {
      prepare(
        title,
        roomNumbers,
        // sharedRoom,
        preferredFloor,
        location,
        description,
      ) {
        return {
          payload: {
            title,
            roomNumbers,
            // sharedRoom,
            preferredFloor,
            location,
            description,
          },
        };
      },
      reducer(state, action) {
        state.roomData = action.payload; // Save the room data into the Redux state
      },
    },
  },
});

export const { saveRoom } = postSlice.actions;
export default postSlice.reducer;
