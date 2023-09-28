import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {setupStore} from "./store/store.ts";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
const store = setupStore();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)






