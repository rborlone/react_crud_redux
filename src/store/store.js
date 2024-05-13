import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserReducer.jsx'


export const store = configureStore({
    reducer: {
        usuarios: UserReducer
    }
});