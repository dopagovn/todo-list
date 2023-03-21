import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from './slice.js';

const persistConfig = {
    key: 'root',
    storage,
}

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

const reducer = combineReducers({
    todoList: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
})

export const persistor = persistStore(store);
export default store;