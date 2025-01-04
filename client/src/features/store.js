import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import notesReducer from '../features/notesSlice';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
    user: userReducer,
  },
});

export default store;
