import React, { useEffect, useRef, useState } from 'react';

import SubTitle from 'components/myPage/SubTitle';

import * as Common from "assets/styleComponent/myPage/myPage";
import * as Style from 'assets/styleComponent/myPage/contact';
import { getMessage, updateMessage } from 'api/chat';

const Contact = () => {
    const chatContentRef = useRef(null);
    const inputRef = useRef(null);
    const [message, setMessage] = useState(null);
    const [sendMessage, setSendMessage] = useState("");

    // 슆+엔터 개행
    // 엔터 메시지 보내기
    const onKeyPress = (e) => {
        if (e.code === "Enter" && e.shiftKey) {
            return;
        } else if (e.code === "Enter") {
            e.preventDefault();
            onSubmit();
        }
    }

    // 메시지 보내기
    const onSubmit = (e) => {
        const data = {
            user_id: sessionStorage.getItem("userId"),
            message: sendMessage
        }
        updateMessage(data);
        setSendMessage("");
        inputRef.current.focus();
        scrollBottomStart();
    }

    // 스크롤 하단 시작
    const scrollBottomStart = () => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }

    // 메시지 가져오기
    useEffect(() => {
        scrollBottomStart();
        // getMessage({user_id: sessionStorage.getItem("userId")},setMessage);
    }, [])


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
                    <li className="day">
                        <h2>2023년 06월 21일</h2>
                    </li>
                    <li className='right'>
                        <div>14:12</div>
                        <p>오른쪽!</p>
                    </li>
                    <li className='left'>
                        <p>왼쪽</p>
                        <div>14:12</div>
                    </li>
                    <li className='right'>
                        <div>14:12</div>
                        <p>오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!오른쪽!</p>
                    </li>
                </ul>
                <div className="send" >
                    <textarea name="message" value={sendMessage} onChange={onChange} ref={inputRef} onKeyPress={onKeyPress} />
                    <button onClick={onSubmit}>전송</button>
                </div>
            </Style.ChatContainer>
        </Common.InDiv >
    );
};

export default Contact;