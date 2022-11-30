import React, { useState } from 'react';
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { login } from "utils/axios";

import LoginInput from 'components/input/LoginInput';

const Login = () => {
    const nav = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const { mutate, isLoading, is } = useMutation(login);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: id,
            pw: password
        }
        mutate(data);
        if (sessionStorage.getItem("loginCheck") === "success") {
            nav("/");
        }
    }

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
    }
    return (
        <>
            <h1>로그인창</h1>
            <Form onSubmit={onSubmit}>
                <LoginInput type="text" name='id' placeholder='아이디' onChange={onChange}></LoginInput>
                <LoginInput type="password" name='password' placeholder='비밀번호' onChange={onChange}></LoginInput>
                <input type="submit" value="로그인하기" />
            </Form>
        </>
    );
};

const Form = styled.form`
    display: inline-flex;
    flex-direction: column;
`;

export default Login;