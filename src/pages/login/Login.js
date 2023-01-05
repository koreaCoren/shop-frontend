import React, { useEffect, useState } from 'react';
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { login } from "utils/axios";
import * as Style from "assets/styleComponent/login/login"

import LoginInput from 'components/input/Input';

const Login = () => {
    const nav = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const { mutateAsync, isLoading, is } = useMutation(login);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: id,
            pw: password
        };
        await mutateAsync(data);
        if (sessionStorage.getItem("loginCheck") === "success") {
            nav("/");
        };
    };

    useEffect(() => {
        if (sessionStorage.getItem("loginCheck") === "success") {
            alert("로그인중에는 접근 하실 수 없습니다.");
            nav("/");
        }
    }, []);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };
    return (
        <>
            <h1>로그인창</h1>
            <Style.Form onSubmit={onSubmit}>
                <LoginInput type="text" name='id' placeholder='아이디' onChange={onChange}></LoginInput>
                <LoginInput type="password" name='password' placeholder='비밀번호' onChange={onChange}></LoginInput>
                <input type="submit" value="로그인하기" />
            </Style.Form>
        </>
    );
};

export default Login;