import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useMutation } from "react-query";

import Login from 'pages/login/Login';
import Register from 'pages/login/Register';
import { tokenCheck } from 'utils/axios';

const Header = () => {
    const nav = useNavigate();
    const { mutate, isLoading } = useMutation(tokenCheck);

    useEffect(() => {
        const data = {
            token: sessionStorage.getItem("token"),
            userId: sessionStorage.getItem("userId"),
        }
        mutate(data);
    }, [nav])
    return (
        <header>
            <ul>
                <li><Link to={"login"}>로그인</Link></li>
                <li><Link to={"loginRegister"}>회원가입</Link></li>
            </ul>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/loginRegister' element={<Register />} />
            </Routes>
        </header>
    );
};

export default Header;