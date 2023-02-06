import React, { useState, useEffect } from 'react';
import * as Style from "assets/styleComponent/myPage/myPage";
import * as Info from "assets/styleComponent/myPage/info";
import LoginInput from 'components/input/Input';
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import { login } from "utils/axios";


const Relogin = ({ }) => {
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
        if (sessionStorage.getItem("loginCheck") !== "success") {
            alert("먼저 로그인이 필요합니다.");
            nav("/login");
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
            <div className='relogin_title'>
                <div>
                    <h2>개인 정보 수정</h2>
                </div>
                <div>
                    <h3>비밀번호 재확인</h3>
                    <div className='grayTitle'>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 확인해주세요.</div>
                </div>
            </div>
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


export default Relogin;