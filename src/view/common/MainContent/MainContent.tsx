// import "./MainContent.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../Pages/Home/Home.tsx";
import {About} from "../../Pages/About/About.tsx";
import {Contact} from "../../Pages/Contact/Contact.tsx";
import * as React from "react";
import { ShoppingCart } from "../../Pages/Shopping Cart/ShoppingCart.tsx";
import { itemsList } from "../ModifyCart/ModifyCart.tsx";

export function MainContent() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/shoppingCart" element={<ShoppingCart itemsList={itemsList}/>}></Route>
            </Routes>
        </div>
    );
}