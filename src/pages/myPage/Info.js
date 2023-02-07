import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { info, userUpdate } from "utils/axios";
import Input from "components/input/Input";

import * as Style from "assets/styleComponent/myPage/myPage"
import * as InfoStyle from "assets/styleComponent/myPage/info"
import * as Login from "assets/styleComponent/login/login";



const Info = ({ }) => {
    const id = sessionStorage.getItem("userId");
    const [Name, setName] = useState("");
    const [CurrentPW, setCurrentPW] = useState("");
    const [ChangePW, setChangePW] = useState("");
    const [Tell, setTell] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");

    const [UserData, setUser] = useState();

    const userInfo = useMutation(info);
    const userUpd = useMutation(userUpdate);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user_id: id,
            user_nm: Name,
            current_pw: CurrentPW,
            user_pw: ChangePW,
            user_tell: Tell,
            user_email: Email,
            user_addr: Address,
        };
        await userUpd.mutateAsync(data);
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            // case "id":
            //     setId(value);
            //     break;
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

    const getUserData = async () => {
        const data = {
            id: sessionStorage.getItem('userId'),
        };
        await userInfo.mutateAsync(data);

        setUser(data.result);
        setTell(data.result?.user_tel);
        setName(data.result?.user_nm);
        setEmail(data.result?.user_email);
        setAddress(data.result?.user_addr);
    }

    useEffect(() => {
        getUserData();
    }, [])


    return (
        userInfo.isSuccess &&
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>개인 정보 수정</h2>
                    <div className='grayTitle'>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</div>
                </div>
            </div>
            <div className='contents'>
                <InfoStyle.Div>
                    <InfoStyle.Form onSubmit={onSubmit}>
                        <div>
                            <div className='inputTitle'>아이디</div>
                            <div>
                                <Input type="text" name="id" value={UserData.user_id} readOnly={true} />
                            </div>
                        </div>
                        <div>
                            <div className='inputTitle'>이름</div>
                            <div>
                                <Input type="text" name="name" value={Name} onChange={onChange} />
                            </div>
                        </div>
                        <div>
                            <div className='inputTitle'>현재 비밀번호</div>
                            <div>
                                <Input type="password" name="currentPW" onChange={onChange} />
                            </div>
                        </div>
                        <div>
                            <div className='inputTitle'>새 비밀번호</div>
                            <div>
                                <Input type="password" name="changePW" onChange={onChange} />
                            </div>
                        </div>
                        <div>
                            <div className='inputTitle'>휴대폰</div>
                            <div>
                                <Input type="text" name="tell" value={Tell} onChange={onChange} />
                            </div>
                        </div>
                        <div>
                            <div className='inputTitle'>이메일</div>
                            <div>
                                <Input type="text" name="email" value={Email} onChange={onChange} />
                            </div>
                        </div>
                        <div>
                            <div className='inputTitle'>주소</div>
                            <div>
                                <Input type="text" name="address" value={Address} onChange={onChange} />
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="수정" />
                        </div>
                    </InfoStyle.Form>
                </InfoStyle.Div>
            </div>
        </Style.InDiv >
    );
};
export default Info;