import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "assets/css/common/common.css";

import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Main from "../pages/main/Main";
import Login from "pages/login/Login";
import Register from "pages/login/Register";
import Admin from "routers/Admin";
import Product from "./Product";
import Order from "./Order";

function App() {
    const location = useLocation();
    const [header, setHeader] = useState(true);
    const [orderData, setOrderData] = useState();
    return (
        <>
            {header && <Header></Header>}
            <Routes>
                <Route path="/" element={<Main setHeader={setHeader} />} />
                <Route path="/admin/*" element={<Admin setHeader={setHeader} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/loginRegister' element={<Register />} />
                <Route path="/product/*" element={<Product setOrderData={setOrderData} />} />
                <Route path="/order/*" element={<Order orderData={orderData} />} />
            </Routes>
            {header && <Footer></Footer>}
        </>
    );
}

export default App;
