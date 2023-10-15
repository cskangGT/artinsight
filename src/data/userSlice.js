import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profileImage: ''
  },
  reducers: {
   
    setProfileImage: (state, action) => {
      state.profileImage = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setProfileImage } = userSlice.actions

export default userSlice.reducer