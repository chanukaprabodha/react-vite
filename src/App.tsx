import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/Pages/Login/Login.tsx";

function App() {
    return (
        <BrowserRouter>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                      rel="stylesheet"/>
            </head>
            {/*<DefaultLayout/>*/}
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;