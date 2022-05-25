import { configureStore } from "@reduxjs/toolkit";
import PostReducer from '../features/PostSlice'
import userReducer from '../features/users/userSlice'

export const store = configureStore({
    reducer:{
        posts:PostReducer,
        users:userReducer
    }
}); 