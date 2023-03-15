import React, { useState, useEffect } from 'react';
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';

import loginCheck from 'utils/loginCheck';
import { login } from "utils/axios";
import LoginInput from 'components/input/Input';
import SubTitle from 'components/myPage/SubTitle';

import * as Style from "assets/styleComponent/myPage/myPage";
import * as Info from "assets/styleComponent/myPage/info";


const PersonalModify = ({ }) => {
    const nav = useNavigate();
    const [password, setPassword] = useState("");
    const { mutateAsync, isLoading } = useMutation(login);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: sessionStorage.getItem("userId"),
            pw: password
        };
        const confirm = await mutateAsync(data);
        if (confirm === "ok") {
            nav("/myPage/info");
        } else {
            nav("/myPage/relogin");
        };
    };

    useEffect(() => {
        if (loginCheck(true) === true) {
            nav("/");
        }
    }, []);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    return (
        <Style.InDiv>
            <SubTitle h2={"개인 정보 수정"} h3={"회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 확인해주세요."} clickEvent={null} clickText={null} />
            {
                <Info.Div>
                    <Info.Form onSubmit={onSubmit}>
                        <div>
                            <div className='inputTitle'>비밀번호</div>
                            <div><LoginInput type="password" name='password' onChange={onChange}></LoginInput></div>
                        </div>
                        <input type='submit' value='확인'></input>
                    </Info.Form>
                </Info.Div>
            }
        </Style.InDiv >

    );
};


export default PersonalModify;