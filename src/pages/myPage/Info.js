import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"

const Info = ({ }) => {


    return (
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>개인 정보 수정</h2>
                    <div className='grayTitle'>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</div>
                </div>
            </div>
            <div className='contents'>
                <div className='column'></div>
            </div>
        </Style.InDiv>
    );
};
export default Info;