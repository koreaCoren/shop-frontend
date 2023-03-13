import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { tokenCheck } from "utils/axios";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Main from "../pages/main/Main";
import Login from "pages/login/Login";
import Register from "pages/login/Register";
import Admin from "routers/Admin";
import MyPage from "routers/MyPage";
import Product from "./Product";
import Order from "./Order";
import Close from "components/inicis/Close";
import Community from "./Community";

import "assets/css/common/common.css";

function App() {
    const nav = useNavigate();
    const location = useLocation();
    const [header, setHeader] = useState(true);
    const [orderData, setOrderData] = useState();
    const token = useMutation(tokenCheck);

    const adminPageCheck = () => {
        const regex = /.*admin.*/;
        console.log(regex.test(location.pathname));
        if (regex.test(location.pathname)) {
            setHeader(false);
        } else {
            setHeader(true);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        adminPageCheck();
        token.mutateAsync();
    }, [nav])

    return (
        <>
            {header && <Header></Header>}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/myPage/*" element={<MyPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/loginRegister' element={<Register />} />
                <Route path="/product/*" element={<Product setOrderData={setOrderData} />} />
                <Route path="/order/*" element={<Order orderData={orderData} />} />
                <Route path="/close" element={<Close />} />
                <Route path="/community/*" element={<Community />} />
            </Routes>
            {header && <Footer></Footer>}
        </>
    );
}

export default App;
