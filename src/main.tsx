import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import * as React from "react";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
            <App/>
        </Provider>
)
