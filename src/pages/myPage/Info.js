import React, { useState, useEffect } from 'react';

import { getUserInfo, updateUser } from "api/user.js";

import Input from "components/input/Input";
import Loading from 'components/loding/Loading';
import SubTitle from 'components/myPage/SubTitle';

import * as Common from "assets/styleComponent/myPage/myPage"
import * as Style from "assets/styleComponent/myPage/info"

const Info = ({ }) => {
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState("");
    const [tell, setTell] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [currentPW, setCurrentPW] = useState("");
    const [changePW, setChangePW] = useState("");

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        const data = {
            id: sessionStorage.getItem('userId')
        };

        await getUserInfo(data);

        setUserData(data.result);
        setTell(data.result.user_tel);
        setName(data.result.user_nm);
        setEmail(data.result.user_email);
        setAddress(data.result.user_addr);
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "currentPW":
                setCurrentPW(value);
                break;
            case "changePW":
                setChangePW(value);
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
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = {
            user_id: userData.user_id,
            user_nm: name,
            user_tell: tell,
            user_email: email,
            user_addr: address,
        };

        if (currentPW !== "") {
            data = { ...data, current_pw: currentPW, user_pw: changePW };
        }

        await updateUser(data);
    }
    return (
        userData === null
            ? <Loading />
            : <>
                <Common.InDiv>
                    <SubTitle h2={"개인 정보 수정"} h3={"회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요."} clickEvent={null} clickText={null} />
                    <div className='contents'>
                        <Style.Div>
                            <Style.Form>
                                <div>
                                    <div className='inputTitle'>아이디</div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="id"
                                            value={userData.user_id}
                                            readOnly={true} />
                                    </div>
                                </div>
                                <div>
                                    <div className='inputTitle'>이름</div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div>
                                    <div className='inputTitle'>현재 비밀번호</div>
                                    <div>
                                        <Input
                                            type="password"
                                            name="currentPW"
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div>
                                    <div className='inputTitle'>새 비밀번호</div>
                                    <div>
                                        <Input
                                            type="password"
                                            name="changePW"
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div>
                                    <div className='inputTitle'>휴대폰</div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="tell"
                                            value={tell}
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div>
                                    <div className='inputTitle'>이메일</div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div>
                                    <div className='inputTitle'>주소</div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="address"
                                            value={address}
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="button"
                                        value="수정"
                                        onClick={onSubmit} />
                                </div>
                            </Style.Form>
                        </Style.Div>
                    </div>
                </Common.InDiv >
            </>
    );
};
export default Info;