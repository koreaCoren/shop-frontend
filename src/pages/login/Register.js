/* eslint-disable no-fallthrough */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import styled from "styled-components";

import Input from "components/input/LoginInput";
import { register } from "utils/axios";

const Register = () => {
    const nav = useNavigate();

    const [getId, setId] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getTelll, setTell] = useState("");
    const [getEamil, setEmail] = useState("");

    const { mutate, isLoading } = useMutation(register);

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!emailRegex.test(getEamil)) {
            alert("이메일 형식이 아님 다시 적으셈");
            return;
        };

        const data = {
            id: getId,
            pw: getPassword,
            tell: getTelll,
            email: getEamil,
        };

        mutate(data);
    };

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "pw":
                setPassword(value);
                break;
            case "tell":
                setTell(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="loginContainer">
                <h1>회원가입창</h1>

                <Form onSubmit={onSubmit}>
                    <Input type="text" name="id" onChange={onChange} placeholder="아이디" />
                    <Input type="password" name="pw" onChange={onChange} placeholder="비밀번호" />
                    <Input type="text" name="tell" onChange={onChange} placeholder="전화번호" />
                    <Input type="text" name="email" onChange={onChange} placeholder="이메일" />
                    <input type="button" className="buttonGary" onClick={() => { nav(-1); }} value="회원가입" />
                </Form>
            </div>
        </>
    );
};

const Form = styled.form`
    display: inline-flex;
    flex-direction: column;
`;

export default Register;
