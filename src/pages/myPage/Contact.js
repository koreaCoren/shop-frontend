import React, { useEffect, useRef } from 'react';

import SubTitle from 'components/myPage/SubTitle';

import * as Common from "assets/styleComponent/myPage/myPage";
import * as Style from 'assets/styleComponent/myPage/contact';

const Contact = () => {
    const chatContentRef = useRef(null);

    // 스크롤 하단 시작
    useEffect(() => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }, []);

    return (
        <Common.InDiv>
            <SubTitle h2={"고객 문의"} h3={"문의 주시면 빠른 시간내에 답변 해드리겠습니다."} clickText={<><i className="fa-solid fa-comment-dots"></i>문의하기</>} />
            <Style.ChatContainer>
                <ul ref={chatContentRef}>
                    <li className='right'>
                        <div>오른쪽!</div>
                    </li>
                    <li className='left'>
                        <div>왼쪽</div>
                    </li>
                    <li className='right'>
                        <div>오른쪽!</div>
                    </li>
                    <li className='left'>
                        <div>왼쪽</div>
                    </li>
                    <li className='right'>
                        <div>오른쪽!</div>
                    </li>
                    <li className='left'>
                        <div>왼쪽</div>
                    </li>
                    <li className='right'>
                        <div>오른쪽!</div>
                    </li>
                    <li className='left'>
                        <div>왼쪽</div>
                    </li>
                    <li className='right'>
                        <div>오른쪽!</div>
                    </li>
                    <li className='left'>
                        <div>왼쪽</div>
                    </li>
                    <li className='right'>
                        <div>오른쪽!</div>
                    </li>
                    <li className='left'>
                        <div>왼쪽</div>
                    </li>
                    <li className='right'>
                        <div>오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!</div>
                    </li>
                    <li className='left'>
                        <div>왼쪽</div>
                    </li>
                    <li className='left'>
                        <div>해야지!</div>
                    </li>
                </ul>
                <div className="send">
                    <textarea />
                    <button>전송</button>
                </div>
            </Style.ChatContainer>
        </Common.InDiv >
    );
};

export default Contact;