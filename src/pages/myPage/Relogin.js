import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { address } from 'utils/axios';
import styled from 'styled-components';
import * as Style from "assets/styleComponent/myPage/myPage"
import LoginInput from 'components/input/Input';

const Relogin = ({ }) => {
    const [list, setBoard] = useState();
    const { mutateAsync, isSuccess } = useMutation(address);

    const getAddrData = async () => {
        const data = {
            userId: sessionStorage.getItem('userId'),
            token: sessionStorage.getItem("token")
        };
        await mutateAsync(data);
        setBoard(data.result);
        console.log(data.result);
    }

    useEffect(() => {
        getAddrData();
    }, [])

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

                isSuccess &&
                <Div>
                    <Form>
                        <div>
                            <div className='inputTitle'>아이디</div>
                            <div><LoginInput type="text"></LoginInput></div>

                        </div>
                        <div>
                            <div className='inputTitle'>비밀번호</div>
                            <div><LoginInput type="password"></LoginInput></div>
                        </div>
                    </Form>

                </Div>

            }

        </Style.InDiv >

    );
};

const Div = styled.div`
    border-top: 2px solid black;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    `
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 520px;
    height: 170px;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 15px;    

    >div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 10px 0px;
    }

    h1{
        font-size: 20px;
        margin-bottom: 20px;
    }

    input{
        width: 320px;
        line-height: 24px;
    }

    input[type="submit"]{
        border: none;
        background-color: #444;
        color: #fff;
        line-height: 24px;
        padding: 5px;
        cursor: pointer;
        margin-top: 20px;
    }

    .inputTitle{
        width: 100px;
    }
`
export default Relogin;