import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./HomeReducer/HomeReducer";
import OwnerReducer from "./OwnerReducer/OwnerReducer";

// Combine reducers
const rootReducer = combineReducers({
    home: HomeReducer,
    owner: OwnerReducer
});

// Define RootState
export type RootState = ReturnType<typeof rootReducer>;

// Configure the store
const store = configureStore({
    reducer: rootReducer
});

export default store;
