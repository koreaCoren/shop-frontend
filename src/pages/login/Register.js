/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import Input from "components/input/Input";
import { register } from "utils/axios";
import loginCheck from "utils/loginCheck";

import * as Style from "assets/styleComponent/login/login";

const Register = () => {
    const nav = useNavigate();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [telll, setTell] = useState("");
    const [eamil, setEmail] = useState("");
    // const [address, setAddress] = useState("");

    const { mutateAsync, isLoading } = useMutation(register);

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!emailRegex.test(eamil)) {
            alert("이메일 형식이 아닙니다.");
            return;
        };

        const data = {
            name: name,
            id: id,
            pw: password,
            tell: telll,
            email: eamil,
            // address: address,
        };

        mutateAsync(data);
        // nav("/");
    };

    useEffect(() => {
        if (loginCheck(false) === false) {
            nav("/");
        }
    }, []);

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
            // case "address":
            //     setAddress(value);
            //     break;
            default:
                break;
        }
    };

    return (
        <>
            <Style.Form onSubmit={onSubmit}>
                <div>
                    <h1>회원가입</h1>
                    <Input type="text" name="name" onChange={onChange} placeholder="이름" />
                    <Input type="text" name="id" onChange={onChange} placeholder="아이디" />
                    <Input type="password" name="pw" onChange={onChange} placeholder="비밀번호" />
                    <Input type="text" name="tell" onChange={onChange} placeholder="전화번호" />
                    <Input type="text" name="email" onChange={onChange} placeholder="이메일" />
                    {/* <Input type="text" name="address" onChange={onChange} placeholder="주소" /> */}
                    <input type="submit" value="회원가입" />
                </div>
            </Style.Form>
        </>
    );
};

export default Register;
