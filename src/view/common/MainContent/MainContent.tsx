import "./MainContent.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../Pages/Home/Home.tsx";
import {About} from "../../Pages/About/About.tsx";
import {Contact} from "../../Pages/Contact/Contact.tsx";
import * as React from "react";

export function MainContent() {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    );
}