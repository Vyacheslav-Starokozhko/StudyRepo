import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./reducers/UserSlice";
import {postAPI} from "../services/PostService";
import {counterReducer} from "./reducers/CounterSlice";


const rootReducer = combineReducers({
    userReducer,
    counterReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>{
            return getDefaultMiddleware().concat(postAPI.middleware)
        }
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
