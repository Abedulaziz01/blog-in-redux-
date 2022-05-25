import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {  id: '0', name:'abdu' },
    {  id:'1', name :'ali'  },
    {  id:'2',name:'huessen' }
]
 
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const {} = userSlice.actions
export const selectAllusers = (state)=>state.users;

export default userSlice.reducer