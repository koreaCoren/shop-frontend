/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import * as Style from "assets/styleComponent/login/register";

import Input from "components/input/Input";
import { register } from "utils/axios";

const Register = () => {
    const nav = useNavigate();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [telll, setTell] = useState("");
    const [eamil, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const { mutateAsync, isLoading } = useMutation(register);

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!emailRegex.test(eamil)) {
            alert("이메일 형식이 아님 다시 적으셈");
            return;
        };

        const data = {
            name: name,
            id: id,
            pw: password,
            tell: telll,
            email: eamil,
            address: address,
        };

        mutateAsync(data);
        // nav("/");
    };

    useEffect(() => {
        if (sessionStorage.getItem("loginCheck") === "success") {
            alert("로그인중에는 접근 하실 수 없습니다.");
            nav("/");
        }
    }, [])

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "name":
                setName(value);
                break;
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
            case "address":
                setAddress(value);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="loginContainer">
                <h1>회원가입창</h1>

                <Style.Form onSubmit={onSubmit}>
                    <Input type="text" name="name" onChange={onChange} placeholder="이름" />
                    <Input type="text" name="id" onChange={onChange} placeholder="아이디" />
                    <Input type="password" name="pw" onChange={onChange} placeholder="비밀번호" />
                    <Input type="text" name="tell" onChange={onChange} placeholder="전화번호" />
                    <Input type="text" name="email" onChange={onChange} placeholder="이메일" />
                    <Input type="text" name="address" onChange={onChange} placeholder="주소" />
                    <input type="submit" value="회원가입" />
                </Style.Form>
            </div>
        </>
    );
};

export default Register;
