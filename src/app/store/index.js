import { configureStore } from '@reduxjs/toolkit';
import exampleR from './modules/exampleSlice';

export const store = configureStore({
    reducer: { exampleR },
});
