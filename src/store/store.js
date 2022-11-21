import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import authReducer from './authSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});