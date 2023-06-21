import React, { useEffect, useRef, useState } from 'react';

import SubTitle from 'components/myPage/SubTitle';

import * as Common from "assets/styleComponent/myPage/myPage";
import * as Style from 'assets/styleComponent/myPage/contact';
import { getMessage, updateMessage } from 'api/chat';

const Contact = () => {
    const chatContentRef = useRef(null);
    const [message, setMessage] = useState(null);
    const [sendMessage, setSendMessage] = useState("");

    // 메시지 보내기
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            user_id: sessionStorage.getItem("userId"),
            message: sendMessage
        }
        updateMessage(data);
    }

    // 메시지 가져오기
    useEffect(() => {
        // getMessage(setMessage);
    }, [])

    // 스크롤 하단 시작
    useEffect(() => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }, []);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "message":
                setSendMessage(value);
                break;

            default:
                break;
        }
    }

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
                    <textarea name="message" value={sendMessage} onChange={onChange} />
                    <button onClick={onSubmit}>전송</button>
                </div>
            </Style.ChatContainer>
        </Common.InDiv >
    );
};

export default Contact;