import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "components/common/Header";
import Main from "./Main";
import Login from "pages/login/Login";
import Register from "pages/login/Register";
import ProductRegister from "pages/product/Register";
import Admin from "routers/Admin";

import "assets/css/common/common.css";
import { useState } from "react";

function App() {
    const location = useLocation();
    const [header, setHeader] = useState(true);
    return (
        <>
            {
                header && <Header></Header>
            }
            <Routes>
                <Route path="/" element={<Main setHeader={setHeader} />} />
                <Route path="/admin/*" element={<Admin setHeader={setHeader} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/loginRegister' element={<Register />} />
                <Route path="/product/register" element={<ProductRegister />} />
            </Routes>
        </>
    );
}

export default App;
